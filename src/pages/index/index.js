import React from 'react';
import ReactDOM from 'react-dom';

import '@css/common/base.scss';
import './index.scss';

import { pageMap } from '@src/constants';

const App = () => {
    const lis = [];
    for (let url in pageMap) {
        lis.push(
            <li key={url}>
                <a href={url + '.html'}>{pageMap[url]}</a>
            </li>
        );
    }
    return <ul>{lis}</ul>;
};

const root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);

ReactDOM.render(
    <App />,
    root
);
