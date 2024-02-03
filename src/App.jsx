import "./App.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Users from "./components/Users";

function App() {
  return (
    <>
      <h1>Redux Counter</h1>
      <Display />
      <Buttons />
      <Users />
    </>
  );
}

export default App;
