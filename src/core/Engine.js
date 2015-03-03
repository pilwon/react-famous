import Engine from 'famous/core/Engine';
// import ReactUpdates from 'react/lib/ReactUpdates';

// ReactUpdates.injection.injectBatchingStrategy({
//   isBatchingUpdates: true,
//   batchedUpdates(callback, param) {
//     callback(param);
//   }
// });
// Engine.on('prerender', ReactUpdates.flushBatchedUpdates.bind(ReactUpdates));

Engine.setOptions({
  appMode: false
});

export default Engine;
