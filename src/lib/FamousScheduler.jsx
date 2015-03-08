const _callbacks = [];

export function schedule(cb, delay) {
  _callbacks.push([cb, delay]);
}

export function run() {
  _callbacks.forEach(([cb, delay]) => {
    if (delay) {
      setTimeout(cb, delay);
    } else {
      cb();
    }
  });
}

export default {
  schedule,
  run
};
