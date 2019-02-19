import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import Axios from 'axios';

import '@css/common/base.scss';
import '@css/waterfall/waterfall.scss';

import NavList from '@src/components/NavList';


const AppRouter = () => (
    <Router basename="/waterfall.html" getUserConfirmation={(message, callback) => {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }}>
        <React.Fragment>
            <header>
                <NavList className="ss" />
            </header>
        </React.Fragment>
    </Router>
);

ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
);
