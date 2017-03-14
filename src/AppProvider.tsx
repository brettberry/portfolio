
import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './redux';

type AppProviderProps = {
    children?: any;
};

export default function AppProvider({ children }: AppProviderProps) {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    );
}
