import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import DemoWorker from '@src/works/demo.worker.js';

import '@css/common/base.scss';
import './index.scss';

import { pageMap } from '@src/config/pages';

const App = () => {
  useEffect(() => {
    const worker = new DemoWorker();
    worker.postMessage('hello');
    worker.postMessage({ num: 0 });
    worker.onmessage = (event) => {
      console.log('message from worker: ', event);
    };
    worker.onerror = (err) => {
      console.log('error from worker: ', err);
    };
    return () => {
      worker.terminate();
    };
  });

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
