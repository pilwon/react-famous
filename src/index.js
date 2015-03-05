export default {
  core: {
    Context: require('./core/Context'),
    Engine: require('./core/Engine'),
    Modifier: require('./core/Modifier'),
    RenderNode: require('./core/RenderNode'),
    Surface: require('./core/Surface')
  },
  lib: {
    FamousMixin: require('./lib/FamousMixin'),
    FamousNodeMixin: require('./lib/FamousNodeMixin'),
    FamousUtil: require('./lib/FamousUtil')
  },
  surfaces: {
    CanvasSurface: require('./surfaces/CanvasSurface'),
    ContainerSurface: require('./surfaces/ContainerSurface'),
    ImageSurface: require('./surfaces/ImageSurface')
  },
  views: {
    Deck: require('./views/Deck'),
    EdgeSwapper: require('./views/EdgeSwapper'),
    FlexibleLayout: require('./views/FlexibleLayout'),
    Flipper: require('./views/Flipper'),
    GridLayout: require('./views/GridLayout'),
    HeaderFooterLayout: require('./views/HeaderFooterLayout'),
    RenderController: require('./views/RenderController'),
    Scrollview: require('./views/Scrollview'),
    SequentialLayout: require('./views/SequentialLayout')
  }
};
