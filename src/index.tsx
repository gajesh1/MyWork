import * as React from 'react';
import * as ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {rootSaga} from './sagas';
import {TestMainPage} from './components/TestMainPage';
import {Demo} from './containers/Demo';
import {sagaMiddleware, store} from './store';

/**
 * Initiate all sagas
 */
sagaMiddleware.run(rootSaga);

initReactFastclick();

ReactDOM.render(
    <Provider store={store}>
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact={true} path="/" component={TestMainPage} />
                    <Route path="/demo" component={Demo} />
                </Switch>
            </BrowserRouter>
        </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
