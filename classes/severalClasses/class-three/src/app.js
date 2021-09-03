const list = [1, 2, 3];

function App() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default App;
