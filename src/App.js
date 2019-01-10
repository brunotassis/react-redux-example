import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Field from './components/Field';
import fieldReducer from './reducers/fieldReducer';

import Counter from './components/Counter';
import counterReducer from './reducers/counterReducer';

const reducers = combineReducers({
    field: fieldReducer,
    counter: counterReducer
});

const App = () => (
    <Provider store={createStore(reducers)}>
        <Field />
        <hr />
        <Counter />
    </Provider>
);

export default App;
