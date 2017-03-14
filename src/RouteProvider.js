
import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import App from './App';
import { Page } from './pages';

export default function RouteProvider() {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Page} />
            </Route>
        </Router>
    );
}
