import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addNumber} from '../redux/actions/actions';

const NumberInput = () => {
    const [value, setValue] = useState('');
    const results = useSelector(state => state.results);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAdd = (operator) => {
        const newValue = parseFloat(value);
        if (!isNaN(newValue)) {
            const lastResult = results.length > 0 ? results[results.length - 1] : 0;
            let sum = 0;
            switch (operator) {
                case '+':
                    sum = lastResult + newValue;
                    break;
                case '-':
                    sum = lastResult - newValue;
                    break;
                case '*':
                    sum = lastResult * newValue;
                    break;
                case '/':
                    sum = lastResult / newValue;
                    break;
                default:
                    break;
            }
            dispatch(addNumber(sum));
            setValue('');
        }
    };

    return (
        <div>
            <input type="number" value={value} onChange={handleChange}/>
            <button onClick={() => handleAdd('+')}>+</button>
            <button onClick={() => handleAdd('-')}>-</button>
            <button onClick={() => handleAdd('*')}>*</button>
            <button onClick={() => handleAdd('/')}>/</button>
        </div>
    );
};

export default NumberInput;