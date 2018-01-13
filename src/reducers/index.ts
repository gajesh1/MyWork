import {combineReducers, Reducer} from 'redux';
import {demoReducer} from './demoReducer';

// All the reducers should be combined here
export const rootReducer: Reducer<{}> = combineReducers({
    data: demoReducer
});
