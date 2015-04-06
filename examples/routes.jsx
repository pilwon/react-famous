import { Route, DefaultRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import createContent from './lib/createContent';
import Pass from './routes/Pass';

export default (
  <Route path="/" handler={App}>
    <DefaultRoute name="home" handler={Home}/>
    <Route path="modifiers" handler={Pass}>
      <Route name="modifiers.Draggable" path="Draggable" handler={createContent('modifiers', 'Draggable')}/>
    </Route>
    <Route path="surfaces" handler={Pass}>
      <Route name="surfaces.CanvasSurface" path="CanvasSurface" handler={createContent('surfaces', 'CanvasSurface')}/>
      <Route name="surfaces.ContainerSurface" path="ContainerSurface" handler={createContent('surfaces', 'ContainerSurface')}/>
      <Route name="surfaces.ImageSurface" path="ImageSurface" handler={createContent('surfaces', 'ImageSurface')}/>
      <Route name="surfaces.VideoSurface" path="VideoSurface" handler={createContent('surfaces', 'VideoSurface')}/>
    </Route>
    <Route path="views" handler={Pass}>
      <Route name="views.Deck" path="Deck" handler={createContent('views', 'Deck')}/>
      <Route name="views.EdgeSwapper" path="EdgeSwapper" handler={createContent('views', 'EdgeSwapper')}/>
      <Route name="views.FlexibleLayout" path="FlexibleLayout" handler={createContent('views', 'FlexibleLayout')}/>
      <Route name="views.Flipper" path="Flipper" handler={createContent('views', 'Flipper')}/>
      <Route name="views.GridLayout" path="GridLayout" handler={createContent('views', 'GridLayout')}/>
      <Route name="views.HeaderFooterLayout" path="HeaderFooterLayout" handler={createContent('views', 'HeaderFooterLayout')}/>
      <Route name="views.Lightbox" path="Lightbox" handler={createContent('views', 'Lightbox')}/>
      <Route name="views.RenderController" path="RenderController" handler={createContent('views', 'RenderController')}/>
      <Route name="views.ScrollContainer" path="ScrollContainer" handler={createContent('views', 'ScrollContainer')}/>
      <Route name="views.Scrollview" path="Scrollview" handler={createContent('views', 'Scrollview')}/>
      <Route name="views.SequentialLayout" path="SequentialLayout" handler={createContent('views', 'SequentialLayout')}/>
      <Route name="views.SizeAwareView" path="SizeAwareView" handler={createContent('views', 'SizeAwareView')}/>
    </Route>
    <Route path="test" handler={Pass}>
      <Route name="test.Animations" path="Animations" handler={createContent('test', 'Animations')}/>
      <Route name="test.CommentBox" path="CommentBox" handler={createContent('test', 'CommentBox')}/>
      <Route name="test.HelloWorld" path="HelloWorld" handler={createContent('test', 'HelloWorld')}/>
      <Route name="test.HelloWorldDynamic" path="HelloWorldDynamic" handler={createContent('test', 'HelloWorldDynamic')}/>
      <Route name="test.Layout" path="Layout" handler={createContent('test', 'Layout')}/>
      <Route name="test.ReactNode" path="ReactNode" handler={createContent('test', 'ReactNode')}/>
      <Route name="test.Seed" path="Seed" handler={createContent('test', 'Seed')}/>
    </Route>
  </Route>
);
