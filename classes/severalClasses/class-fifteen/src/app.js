const url = "https://ws.apicep.com/cep.json?code=[CEP]";

function App() {
  async function handleClick() {
    const response = await fetch(url.replace("[CEP]", "89040-115"));
    const json = await response.json();
    console.log("cep:", json);
    // status que podemos receber: 200 OK (dados do cep) / 404 NOT FOUND (cep não encontrado) / 400 BAD REQUEST (cep inválido)
  }

  return (
    <>
      {/* uma forma segura de fazer requisições é incluir a requisição dentro de uma função e não declarando ela no corpo do componente, dessa forma ela não vai ser disparada toda vez que o componente for renderizado e sim quando aquele evento ocorrer e a função que executa a requisição for chamada */}
      <button onClick={handleClick}>Buscar CEP</button>
    </>
  );
}

export default App;
