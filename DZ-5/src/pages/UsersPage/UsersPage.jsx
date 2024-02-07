import { useDispatch, useSelector } from "react-redux"
import { addUsers, changeInputValue, clearInput, deleteAllUsers} from "../../store/usersSlice"


export const UsersPage = () => {
    const dispatch = useDispatch()
    const {inputValue, users} = useSelector(state => state.usersReducer)


    const changeInput = (e) => {
        dispatch(changeInputValue(e.target.value))
    }

    const addUsersFunc = () => {
        dispatch(addUsers(inputValue))
    }

  return (
    <>
        <input type="text" value={inputValue} onChange={changeInput} />

        <button onClick={addUsersFunc}>add user</button>
        <button onClick={() => dispatch(clearInput())}>clear</button>
        <button onClick={() => dispatch(deleteAllUsers())}>delete all</button>

        {users.map((user, index) => <p key={index}>{user}</p>)}
    </>
  )
}
