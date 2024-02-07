import { createSlice } from "@reduxjs/toolkit";

    const titleSlice = createSlice({
    name: 'titleSlice',
    initialState:{
        title:'old',
        inputValue: ''
    },
    reducers:{
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ""
        },
        changeInputValue: (state, action) => {
            state.inputValue = action.payload
        },
        clearInput: (state) => {
            state.inputValue = ''
        },
        deleteTitle: (state) => {
            state.title = ''
            state.inputValue = ''
        }
    }

})

export const {changeTitleWithParams, changeInputValue, clearInput,deleteTitle} = titleSlice.actions
export default titleSlice.reducer

