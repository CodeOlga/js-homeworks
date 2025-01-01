import { useSelector, useDispatch } from "react-redux";

import { counterValue } from "./redux/slice/selectors";
import { decrement, increment } from "./redux/slice/counterSlice";

function App() {
  const value = useSelector(counterValue);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h1>Count: {value}</h1>
      <div className="buttons">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
