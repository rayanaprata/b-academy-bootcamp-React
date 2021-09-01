function App() {
  return (
    <Title>
      <i>Rayana</i>
    </Title>
  );
}

function Title({children}) {
  return <h1>Hello {children}</h1>;
}

export default App;
