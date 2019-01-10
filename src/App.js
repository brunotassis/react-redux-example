import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Field from './components/Field';
import fieldReducer from './reducers/fieldReducer';

const reducers = combineReducers({
    field: fieldReducer
});

const App = () => (
    <Provider store={createStore(reducers)}>
        <Field />
    </Provider>
);

export default App;
