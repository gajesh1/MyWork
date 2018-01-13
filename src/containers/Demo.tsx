import * as React from 'react';
import * as Radium from 'radium';
import {connect} from 'react-redux';
import {createStructuredSelector, Selector} from 'reselect';
import {fetchData} from '../actions';
import {getData} from '../selectors';
import {store} from '../store';

export interface IDemoProps {
    data?: Object;
}

@Radium
export class DemoImpl extends React.Component<IDemoProps, {}> {

    componentWillMount() {
        store.dispatch(fetchData());
    }

    render(): JSX.Element {
        return (<div>Demo component</div>);
    }
}

const mapStateToProps: Selector<Map<string, Object>, IDemoProps> = createStructuredSelector({
    data: getData(),
});

export const Demo: React.ComponentClass<IDemoProps> = connect<{}>(mapStateToProps, {})(DemoImpl);
