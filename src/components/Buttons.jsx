import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../redux/slices/counterSlice";

const Buttons = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Обнулить</button>
    </div>
  );
};

export default Buttons;
