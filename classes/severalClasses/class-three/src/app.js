import {useState} from "react";
import {Form} from "./components/form/index";

// estado controlado pelo react

function App() {
  const [inputValue, setInputValue] = useState("");
  console.log("inputValue (estado):", inputValue);

  function handleChange(e) {
    console.log("inputValue:", e.target.value);
    setInputValue(e.target.value);
  }

  return <Form value={inputValue} handleChange={handleChange} />;
}

export default App;
