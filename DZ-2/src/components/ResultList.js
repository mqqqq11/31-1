import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearResults } from '../redux/actions/actions';

const ResultList = () => {
    const results = useSelector(state => state.results);
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearResults());
    };

    return (
        <div>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
            <button onClick={handleClear}>Clear</button>
        </div>
    );
};

export default ResultList;