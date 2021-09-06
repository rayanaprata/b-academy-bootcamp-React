import {useState, useEffect} from "react";

function Root() {
  return <App />;
}

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((c) => c + 1);
    }, 1000);

    // clean
    return () => {
      clearInterval(id);
    };
  });

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </>
  );
}

export default Root;
