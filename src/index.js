export default {
  core: {
    Context: require('./core/Context'),
    Engine: require('./core/Engine'),
    Modifier: require('./core/Modifier'),
    RenderNode: require('./core/RenderNode'),
    Surface: require('./core/Surface'),
    View: require('./core/View')
  },
  lib: {
    FamousComponent: require('./lib/FamousComponent'),
    FamousConstants: require('./lib/FamousConstants'),
    FamousMixin: require('./lib/FamousMixin'),
    FamousNodeMixin: require('./lib/FamousNodeMixin'),
    FamousPatch: require('./lib/FamousPatch'),
    FamousScheduler: require('./lib/FamousScheduler'),
    FamousUtil: require('./lib/FamousUtil'),
    ReactNode: require('./lib/ReactNode')
  },
  modifiers: {
    Draggable: require('./modifiers/Draggable'),
    ModifierChain: require('./modifiers/ModifierChain'),
    StateModifier: require('./modifiers/StateModifier')
  },
  surfaces: {
    CanvasSurface: require('./surfaces/CanvasSurface'),
    ContainerSurface: require('./surfaces/ContainerSurface'),
    FormContainerSurface: require('./surfaces/FormContainerSurface'),
    ImageSurface: require('./surfaces/ImageSurface'),
    InputSurface: require('./surfaces/InputSurface'),
    SubmitInputSurface: require('./surfaces/SubmitInputSurface'),
    TextareaSurface: require('./surfaces/TextareaSurface'),
    VideoSurface: require('./surfaces/VideoSurface')
  },
  views: {
    ContextualView: require('./views/ContextualView'),
    Deck: require('./views/Deck'),
    DrawerLayout: require('./views/DrawerLayout'),
    EdgeSwapper: require('./views/EdgeSwapper'),
    FlexibleLayout: require('./views/FlexibleLayout'),
    Flipper: require('./views/Flipper'),
    GridLayout: require('./views/GridLayout'),
    HeaderFooterLayout: require('./views/HeaderFooterLayout'),
    Lightbox: require('./views/Lightbox'),
    RenderController: require('./views/RenderController'),
    ScrollContainer: require('./views/ScrollContainer'),
    Scroller: require('./views/Scroller'),
    Scrollview: require('./views/Scrollview'),
    SequentialLayout: require('./views/SequentialLayout'),
    SizeAwareView: require('./views/SizeAwareView')
  }
};
