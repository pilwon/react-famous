import './styles/index.less';

import 'famous/inputs/FastClick';
import './lib/overscroll';

import React from 'react';
import Router from 'react-router';

import routes from './routes';

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler), document.body);
});
