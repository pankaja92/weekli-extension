import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router , Route } from 'react-router-dom';
import Signin from './components/Signin';
import Link from './components/Link';

const Main = () => 
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route exact path='/' component={Signin} />
                <Route exact path='/' component={Link} />
            </Fragment>
        </Router>
    </Provider>

export default Main;
