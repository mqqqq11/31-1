import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import NumberInput from './components/NumberInput';
import ResultList from './components/ResultList';
import reducers from './redux/reducers';

const store = createStore(reducers);

const App = () => {
    return (
        <Provider store={store}>
            <div style={{textAlign: 'center'}}>
                <NumberInput />
                <ResultList />
            </div>
        </Provider>
    );
};

export default App;