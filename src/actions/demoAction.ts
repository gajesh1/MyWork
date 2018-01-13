import {SET_DATA, FETCH_DATA} from '../constants';

export function fetchData() {
    return {
        type: FETCH_DATA
    };
}

export function setData(response: Object = {}) {
    return {
        type: SET_DATA,
        response,
    };
}
