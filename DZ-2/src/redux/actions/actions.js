import { ADD, CLEAR } from './actionTypes';

export const addNumber = (number) => ({
    type: ADD,
    payload: number,
});

export const clearResults = () => ({
    type: CLEAR,
});
