import React from 'react';

import 'famous/core/famous.css';
import './style.less';
import App from './components/App';

import './overscroll';
// window.addEventListener('touchmove', (event) => event.preventDefault(), true);

React.render(React.createElement(App), document.body);
