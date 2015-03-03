export default {
  core: {
    Context: require('./core/Context'),
    Engine: require('./core/Engine'),
    Modifier: require('./core/Modifier'),
    RenderNode: require('./core/RenderNode'),
    Surface: require('./core/Surface'),
    Transform: require('./core/Transform')
  },
  transitions: {
    CachedMap: require('./transitions/CachedMap'),
    Easing: require('./transitions/Easing'),
    MultipleTransition: require('./transitions/MultipleTransition'),
    SnapTransition: require('./transitions/SnapTransition'),
    SpringTransition: require('./transitions/SpringTransition'),
    Transitionable: require('./transitions/Transitionable'),
    TransitionableTransform: require('./transitions/TransitionableTransform'),
    TweenTransition: require('./transitions/TweenTransition'),
    WallTransition: require('./transitions/WallTransition')
  },
  utilities: {
    KeyCodes: require('./utilities/KeyCodes'),
    Timer: require('./utilities/Timer'),
    Utility: require('./utilities/Utility')
  },
  views: {
    Deck: require('./views/Deck'),
    GridLayout: require('./views/GridLayout'),
    HeaderFooterLayout: require('./views/HeaderFooterLayout'),
    Scrollview: require('./views/Scrollview'),
    SequentialLayout: require('./views/SequentialLayout')
  }
};
