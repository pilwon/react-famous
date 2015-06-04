import FamousEngine from 'famous/core/FamousEngine';
import FamousDOMElement from 'famous/dom-renderables/DOMElement';
import isEqual from 'lodash/lang/isEqual';
import isUndefined from 'lodash/lang/isUndefined';

import FamousComponent from '../lib/FamousComponent';
import FamousContextWrapper from '../lib/FamousContextWrapper';
import FamousUtil from '../lib/FamousUtil';

class DOMElement extends FamousComponent {
  famousCreate(node) {
    let domElement;

    if (this.props.tagName) {
      domElement = new FamousDOMElement(node, {
        tagName: this.props.tagName
      });
    }
    else {
      domElement = new FamousDOMElement(node);
    }

    this._famousOnSizeChangeComponent = {
      onSizeChange: (size) => {
        if (this._famousReactRoot) {
          this._famousReactRoot.style.width = `${size[0]}px`;
          this._famousReactRoot.style.height = `${size[1]}px`;
          FamousEngine.compositor.updateSize();
        }
      }
    };

    node.addComponent(this._famousOnSizeChangeComponent);

    return domElement;
  }

  famousUpdate(from, to) {
    if (!isUndefined(from.tagName) && from.tagName !== to.tagName) {
      throw new Error('tagName prop cannot be changed.');
    }

    super.famousUpdate(from, to);

    let hasContent = !isUndefined(to.content);
    let hasChildren = !isUndefined(to.children);

    if (hasContent && hasChildren) {
      throw new Error('Cannot set both content prop and children.');
    } else if (hasContent) {
      this._famousReactRootDestroy();
      if (!isEqual(from.content, to.content)) {
        this._famousComponent.setContent(to.content);
      }
    } else if (hasChildren) {
      this._famousComponent.setContent(null);
      FamousUtil.getDOMNodeFromNode(this._famousNode).then((element) => {
        let reactRoot;

        if (this._famousReactRoot) {
          reactRoot = this._famousReactRoot;
        } else {
          reactRoot = this._famousReactRootCreate();
          element
            .querySelector('.famous-dom-element-content')
            .appendChild(reactRoot);
        }

        if (this._famousRouterPathUpdated() || !isEqual(from.children, to.children)) {
          if (this._famousReactRootMounted) {
            this._famousUnmountReact(reactRoot);
          }
          this._famousMountReact(reactRoot, to.children);
        }
      });
    } else {
      this._famousComponent.setContent(null);
      this._famousReactRootDestroy();
    }
  }

  famousDelete() {
    this._famousReactRootDestroy();

    this._famousNode.removeComponent(this._famousOnSizeChangeComponent);

    return super.famousDelete();
  }

  _famousRouterPathUpdated() {
    if (this.context.router) {
      let prevPath = this._famousRouterPath;
      let currentPath = this.context.router.getCurrentPath();
      if (prevPath !== currentPath) {
        return true;
      }
    }
    return false;
  }

  _famousReactRootCreate() {
    let reactRoot = document.createElement('div');
    reactRoot.style.position = 'absolute';
    this._famousReactRoot = reactRoot;
    return reactRoot;
  }

  _famousReactRootDestroy() {
    let reactRoot = this._famousReactRoot;
    if (reactRoot) {
      this._famousUnmountReact(reactRoot);
      reactRoot.parentNode.removeChild(reactRoot);
      this._famousReactRoot = null;
    }
  }

  _famousMountReact(reactRoot, children) {
    React.render((
      <FamousContextWrapper children={children} context={this.context}/>
    ), reactRoot);

    this._famousReactRootMounted = true;
  }

  _famousUnmountReact(reactRoot) {
    React.unmountComponentAtNode(reactRoot);

    this._famousReactRootMounted = false;
  }
}

DOMElement.contextTypes = FamousUtil.getContextTypes();

DOMElement.propTypes = {
  tagName: React.PropTypes.string,
  classes: React.PropTypes.array,
  attributes: React.PropTypes.object,
  properties: React.PropTypes.object,
  id: React.PropTypes.string,
  content: React.PropTypes.string,
  cutout: React.PropTypes.bool
};

DOMElement.famousPropsMapper = {
  classes: (component, classes) => {
    for (let idx in classes) {
      component.addClass(classes[idx]);
    }
  },
  attributes: (component, attributes) => {
    for (let key in attributes) {
      component.setAttribute(key, attributes[key]);
    }
  },
  properties: (component, properties) => {
    for (let key in properties) {
      component.setProperty(key, properties[key]);
    }
  },
  id: 'setId',
  cutout: 'setCutoutState'
};

export default DOMElement;
