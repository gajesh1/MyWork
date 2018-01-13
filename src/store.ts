import logger from 'redux-logger';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';

export const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    logger,
];

/**
 * store configurations:
 * rootReducer: Reducer<{}>
 * config for redux-devtools-extension
 * saga and logger middleware
 */
export const store = createStore(
    rootReducer,
    typeof window !== 'undefined' && window[`__REDUX_DEVTOOLS_EXTENSION__`] && window[`__REDUX_DEVTOOLS_EXTENSION__`](),
    applyMiddleware(...middlewares)
);
