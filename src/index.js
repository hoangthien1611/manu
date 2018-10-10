import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import RootContainer from './app/containers/root/RootContainer';
import configureStore from "./app/Store"
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <RootContainer />
    </Provider>
    , document.getElementById('root')
);

registerServiceWorker();
