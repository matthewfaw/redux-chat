import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.js';
//import devToolsEnhancer from 'remote-redux-devtools';
import App from './components/App';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import startChat, { chatMiddleware } from './custom_middleware/chat';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const navMiddleware = routerMiddleware(browserHistory)
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, navMiddleware, chatMiddleware)));

const history = syncHistoryWithStore(browserHistory, store);

startChat(store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/(:filter)" component={App} />
        </Router>
    </Provider>,
    document.getElementById('root')
);


