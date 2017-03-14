
import React, { Component } from 'react';

type AppProps = {
    children?: undefined;
};

export default class Page extends Component<AppProps, {}> {

    public props: AppProps;

    public render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}
