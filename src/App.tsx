
import React, { Component } from 'react';
import AppProvider from './AppProvider';

type AppProps = {
    children?: undefined;
};

export default class App extends Component<AppProps, {}> {

    public props: AppProps;

    public render() {
        return (
            <AppProvider>
                {this.props.children}
            </AppProvider>
        );
    }
}
