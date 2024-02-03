import { useSelector } from "react-redux";

const Display = () => {
  const counterState = useSelector((state) => state.counter);

  return <h3>Display: {counterState}</h3>;
};

export default Display;
