import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

console.log('hello');
ReactDOM.render(
    <App />,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./app.js');
}
