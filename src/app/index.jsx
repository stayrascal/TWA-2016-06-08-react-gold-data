import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

import reducer from './reducers';

let initialState = {
    status: 'edit',
    items: [{
        type: 'date',
        value: '2016-12-11',
        index: 1465224234195
    }, {
        type: 'text',
        value: 'hello world',
        index: 1465224234196
    }]
};

let store = createStore(reducer, initialState);
let rootElement = document.getElementById('content');
render(<Provider store={store}><App /></Provider>, rootElement)


