import { useDispatch, useSelector } from "react-redux";
import { RootState } from "..";
import { decrement, increment } from "../state/actions";

const Counter: React.FC = () => {

    const dispatch = useDispatch();

    const isLogged = useSelector<RootState, boolean>((state) => state.isLogged.value);
    const counter = useSelector<RootState, number>((state) => state.counter.value);
    
    let input = document.getElementById("valueBar") as HTMLInputElement | null;

    const changeCounter = (sign: string) => {
        if(sign === "+"){
          if(input !== null)
            if(!isNaN(Number(input.value)))
              dispatch(increment(Number(input.value)));
        }
        else if(sign === "-"){
          if(input !== null)
            if(!isNaN(Number(input.value)))
              dispatch(decrement(Number(input.value)));
        }
      }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment(1))}>+1</button>
            <button onClick={() => dispatch(decrement(1))}>-1</button><br></br>
            <input type="text" id="valueBar" title="Must be a valid number" maxLength={6} size={4}/>
            <button onClick={() => changeCounter("+")}>+</button>
            <button onClick={() => changeCounter("-")}>-</button>
            {isLogged ? <h2>You are logged in</h2> : ""}
        </div>
    )
}

export default Counter;