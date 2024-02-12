import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {
    const num = useSelector(state => state.num)
    const dispatch = useDispatch()

    const decrement = () => {
        dispatch({type: "INCREMENT", payload: 1})
    }
    const increment = () => {
        dispatch({type: "DECREMENT", payload: 1})
    }
    return (
        <div className="main">
            <h1>{num}</h1>
            <div className='button'>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
            </div>
        </div>
    )
}

export default App;
