const _callbacks = [];

export function schedule(cb, delay) {
  _callbacks.push([cb, delay]);
}

export function run() {
  while (_callbacks.length) {
    let [cb, delay] = _callbacks.shift();
    
    if (delay) {
      setTimeout(cb, delay);
    } else {
      cb();
    }
  }
}

export default {
  schedule,
  run
};
