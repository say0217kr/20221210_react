import { useDispatch, useSelector } from "react-redux";
import {
    decre,
    DECREASE,
    decreasement,
    incre,
    INCREASE,
    increasement,
} from "../state/counter";

function Counter() {
    // const { counter } = useSelector((state) => state);
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => dispatch(incre({ amount: 2 }))}>+1</button>
            <button onClick={() => dispatch(decre({ amount: 10 }))}>-1</button>
        </div>
    );
}

export default Counter;
