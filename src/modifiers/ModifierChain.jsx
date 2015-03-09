import FamousModifierChain from 'famous/modifiers/ModifierChain';
import defaults from 'lodash/object/defaults';
import React from 'react';

import FamousComponent from '../lib/FamousComponent';

class ModifierChain extends FamousComponent {
  famousCreate() {
    let modifierChain = new FamousModifierChain(this.props.options);

    this.props.modifiers.forEach((modifier) => modifierChain.addModifier(modifier));

    return modifierChain;
  }

  famousCreateNode(parentNode) {
    let modifierChain = this.getFamous();
    let node = parentNode.add(modifierChain);
    let next = this.getFamousChildrenRef().map((child, idx) => [child, node]);
    return [node, next];
  }

  famousUpdate(nextProps) {
    let modifierChain = this.getFamous();

    this._chain.length = 0;
    nextProps.modifiers.forEach((modifier) => modifierChain.addModifier(modifier));
  }

  render() {
    return (
      <div data-famous="ModifierChain">
        {this.getFamousChildren()}
      </div>
    );
  }
}

defaults(ModifierChain, FamousModifierChain);

ModifierChain.propTypes = {
  modifiers: React.PropTypes.array
};

export default ModifierChain;
