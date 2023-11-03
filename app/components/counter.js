"use client"
import {useDispatch , useSelector} from "react-redux";
import {setNumber} from "../../redux/slices/slice";


const Counter = () => {
    const dispatch = useDispatch();
    const number = useSelector((state) =>state.number)

    return (
        <div>
            <div>{number}</div>
            <button onClick={() => dispatch(setNumber(number + 1))}>
                카운터
            </button>
        </div>
    )
}

export default Counter;