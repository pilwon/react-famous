import ElementAllocator from 'famous/core/ElementAllocator';

let _allocate = ElementAllocator.prototype.allocate;

ElementAllocator.prototype.allocate = function (...args) {
  let result = _allocate.apply(this, args);
  this.container.appendChild(result);
  return result;
};
