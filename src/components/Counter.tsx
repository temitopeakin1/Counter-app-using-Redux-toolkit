import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../state/store";
import { decrement, incrementByAmount, reset, selectValue } from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector(selectValue);
  // const count = useSelector(state: RootState) => state.counter.value
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(incrementByAmount(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
