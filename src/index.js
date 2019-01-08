import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import '@src/css/base.scss';

(function() {
    let data = null;
    Axios.get('/static/masonryItems.json').then(res => {data = res});
    console.log(data);
})();

const App = () => {
    return (
        <ul>
            <li><a href="waterfall">瀑布流图展</a></li>
            <li><a href="music">音乐</a></li>
        </ul>
    );
};

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(
    <App />,
    root
);
