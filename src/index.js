
import React from 'react';
import { render } from 'react-dom';
import Promise from 'bluebird';

import RouteProvider from './RouteProvider';

Promise.config({
    cancellation: true,
    warnings: {
        wForgottenReturn: false
    }
});

const RootComponent = () => {
    return <RouteProvider/>;
};

render(<RootComponent/>, document.getElementById('react-main'));
