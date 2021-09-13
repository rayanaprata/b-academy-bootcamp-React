import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import {useState, useEffect} from "react";
import {Form} from "./components/form/index";
import {Table} from "./components/table/index";
import {get, post, del} from "./http";

const url = "http://localhost:3333/cars";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getCars() {
      const result = await get(url);
      console.log("get", result);
      setCars(result);
    }

    getCars();
  }, [cars]);

  async function handleSubmit(e) {
    e.preventDefault();

    const car = {
      image: e.target.elements.image.value,
      brandModel: e.target.elements.brandmodel.value,
      year: e.target.elements.year.value,
      plate: e.target.elements.plate.value,
      color: e.target.elements.color.value,
    };

    const newCars = [...cars, car];
    const result = await post(url, car);
    console.log("post", result);

    if (result.error) {
      console.log("Erro ao registrar: ", result.message);
      return;
    }

    e.target.reset();
    setCars(newCars);
  }

  async function handleDelete(plate) {
    const newCars = cars.filter((car) => plate !== car.plate);
    const result = await del(url, {plate});
    console.log("delete", url, plate);

    if (result.error) {
      console.log("Erro ao deletar: ", result.message);
      return;
    }

    setCars(newCars);
  }

  return (
    <>
      <GlobalStyle />
      <Cars>
        <Form handleSubmit={handleSubmit} />
        <Table cars={cars} handleDelete={handleDelete} />
      </Cars>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    background-color: rgb(219, 219, 219);
    font-family: "Helvetica Neue", Helvetica;
  }
`

const Cars = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default App;
