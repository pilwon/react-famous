import FamousEngine from 'famous/core/Engine';
// import ReactUpdates from 'react/lib/ReactUpdates';

import '../lib/FamousPatch';

// ReactUpdates.injection.injectBatchingStrategy({
//   isBatchingUpdates: true,
//   batchedUpdates(callback, param) {
//     callback(param);
//   }
// });
// FamousEngine.on('prerender', ReactUpdates.flushBatchedUpdates.bind(ReactUpdates));

FamousEngine.setOptions({
  appMode: false
});

export default FamousEngine;
