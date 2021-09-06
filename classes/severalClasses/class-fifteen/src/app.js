import {useEffect} from "react";

// Sempre que precisamos fazer efeitos colaterais em nosso componente, precisaremos utilizar hooks. Mudança de estado, requests ajax...

// O useEffect serve para adicionar efeitos colaterais no componente de forma segura, mantendo o componente (corpo e retorno) puro

const url = "https://ws.apicep.com/cep.json?code=[CEP]";

function App() {
  console.log("1) montando componente...");

  // ele espera que uma função seja passada pra ele
  // essa função é executada logo depois da montagem do componente
  useEffect(() => {
    console.log("3) depois de montar!");
    async function getCep() {
      const response = await fetch(url.replace("[CEP]", "89040-115"));
      const json = await response.json();
      console.log("cep:", json);
      // status que podemos receber: 200 OK (dados do cep) / 404 NOT FOUND (cep não encontrado) / 400 BAD REQUEST (cep inválido)
    }
    getCep();
  });

  // async function handleClick() {
  //   const response = await fetch(url.replace("[CEP]", "89040-115"));
  //   const json = await response.json();
  //   console.log("cep:", json);
  // }

  console.log("2) componente pronto para montar");
  return (
    <>
      <p>Verify the console</p>
      {/* uma forma segura de fazer requisições (sem gerar um loop infinito) é incluir a requisição dentro de uma função e não declarando ela no corpo do componente, dessa forma ela não vai ser disparada toda vez que o componente for renderizado e sim quando aquele evento ocorrer e a função que executa a requisição for chamada 
      <button onClick={handleClick}>Buscar CEP</button> */}
    </>
  );
}

// todos os hooks devem iniciar com use
// eu posso criar meu próprio hook
// só é possível utilizar os hooks em dois casos, dentro do corpo de um componente de função ou dentro de um hook customizado
// não é possível executar hooks de forma condicional

export default App;
