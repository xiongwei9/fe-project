import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Axios from 'axios';

import '@css/common/base.scss';
import '@css/waterfall/waterfall.scss';

// import NavList from '@src/components/NavList';


const AppRouter = () => (
  <Router basename="/waterfall.html">
    <React.Fragment>
      {/* <header>
        <NavList />
      </header> */}
      <h1>WATERFALL DEMO</h1>
    </React.Fragment>
  </Router>
);

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);
