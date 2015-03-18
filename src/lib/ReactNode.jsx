import FamousSurface from 'famous/core/Surface';
import isArray from 'lodash/lang/isArray';
import isString from 'lodash/lang/isString';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from './FamousComponent';

export class FamousReactNode extends FamousSurface {
  constructor(options, context) {
    super(options);

    this._reactContext = context;

    this.deploy = this.recall = () => {};

    this.on('deploy', this.onDeploy);
    this.on('recall', this.onRecall);
  }

  onDeploy() {
    let content = this.getContent();
    let context = this._reactContext;
    let target = this._currentTarget;

    if (Array.isArray(content)) {
      content = (
        <div>{content}</div>
      );
    } else if (isString(content)) {
      content = (
        <span>{content}</span>
      );
    }

    if (React.isValidElement(content)) {
      if (context) {
        React.withContext(context, () => {
          React.render(content, target);
        });
      } else {
        React.render(content, target);
      }
    } else {
      throw new Error('Content is not a valid react component');
    }
  }

  onRecall() {
    let target = this._currentTarget;

    React.unmountComponentAtNode(target);
  }
}

export class ReactNode extends FamousComponent {
  famousCreate() {
    return new FamousReactNode(defaults(this.props.options, {
      properties: {
        overflow: 'hidden'
      }
    }));
  }

  famousCreateNode(parentNode) {
    let reactNode = this.getFamous();
    let node = parentNode.add(reactNode);
    return [node, null];
  }

  famousUpdate(nextProps) {
    let reactNode = this.getFamous();
    let content = this.props.children;

    reactNode.setOptions(defaults({}, nextProps.options, {content}));
  }

  render() {
    return (
      <div data-famous="ReactNode"/>
    );
  }
}

defaults(ReactNode, FamousReactNode);

export default ReactNode;
