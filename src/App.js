import "./App.css";
import { Stepper } from "./components/Stepper";
import { Control } from "./components/Control";

function App() {
  return (
    <div className="App">
      <Stepper>
        <Control />
      </Stepper>
    </div>
  );
}

export default App;
