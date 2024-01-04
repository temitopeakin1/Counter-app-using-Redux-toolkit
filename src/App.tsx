import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="title">
      <h2>Counter App using Redux</h2>
      <p>
        I built this simple counter app to fully understand the Redux toolkit
      </p>
      <Counter />
    </div>
  );
};

export default App;
