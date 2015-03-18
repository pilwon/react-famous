import ElementAllocator from 'famous/core/ElementAllocator';

let _allocate = ElementAllocator.prototype.allocate;

ElementAllocator.prototype.allocate = function () {
  let result = _allocate.apply(this, arguments);
  this.container.appendChild(result);
  return result;
};
