import { useDispatch, useSelector } from "react-redux"
import { changeInputValue, changeTitleWithParams, clearInput, deleteTitle } from "../../store/titleSlice"

export const MainPage = () => {
    const dispatch = useDispatch()
    const {title, inputValue} = useSelector(state => state.titleReducer)

    const changeInput = (e) => {
        dispatch(changeInputValue(e.target.value))
    }

  return (
    <>
        <h1>{title}</h1>

        <input type="text" value={inputValue} onChange={changeInput}/>


        <button onClick={() => dispatch(changeTitleWithParams(inputValue))}>Add</button>

        <button onClick={() => dispatch(clearInput())}>Clear</button>

        <button onClick={() => dispatch((deleteTitle()))}>Delete</button>
    </>
  )
}


