import {createSelector} from 'reselect';

// Add selectors to get data from redux-store
const selectDataDomain = (state: Map<string, Object>): Function => state[`data`].toJS();

export const getData: Function = () => createSelector(
    selectDataDomain,
    (data: Object) => Object.keys(data).length ? data[`instanceList`] : {}
);
