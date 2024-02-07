import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState:{
        users: [],
        inputValue: ''
    },
    reducers: {
        changeInputValue: (state, action) => {
            state.inputValue = action.payload
        },
        addUsers: (state, action) => {
            state.users = [...state.users, action.payload]
            state.inputValue = ''
        },
        clearInput: (state) => {
            state.inputValue = ''
        },
        deleteAllUsers: (state) => {
            state.users = []
        }
    }
})

export const {changeInputValue, addUsers, clearInput, deleteAllUsers} = usersSlice.actions
export default usersSlice.reducer