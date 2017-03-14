
import { createStore, combineReducers, applyMiddleware } from 'redux';
import * as storage from 'redux-storage';
import immutableMerger from 'redux-storage-merger-immutablejs';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import mapValues from 'lodash/mapValues';

import reducers from './reducers';
import { isProduction } from '~/constants';

const loggerMiddleware = createLogger({
    level: 'warn',
    collapsed: (getState, action) => !action.error,
    stateTransformer: state => mapValues(state, s => s.toJS())
});

const rootReducer = storage.reducer(
    combineReducers(reducers),
    immutableMerger
);

const middleware = isProduction ? applyMiddleware(thunkMiddleware) :
                                  applyMiddleware(thunkMiddleware, loggerMiddleware);

export default createStore(rootReducer, middleware);
