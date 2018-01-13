import {all} from 'redux-saga/effects';
import {fetchData} from './demoSagas';

// All the sagas should be combined here
export function* rootSaga() {
    yield all([
        fetchData(),
    ]);
}
