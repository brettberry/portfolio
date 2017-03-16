
import React from 'react';
import { render } from 'react-dom';
import Promise from 'bluebird';
import App from './App';

Promise.config({
    cancellation: true,
    warnings: {
        wForgottenReturn: false
    }
});


render(<App/>, document.getElementById('react-main'));
