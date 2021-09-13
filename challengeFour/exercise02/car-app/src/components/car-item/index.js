import styled from 'styled-components';

export function CarItem({car, handleDelete}) {
  return (
    <tr>
      <td>
        <Img src={car.image} alt={car.brandModel} />
      </td>
      <td>{car.plate}</td>
      <td>{car.brandModel}</td>
      <td>{car.year}</td>
      <td>
        <Color style={{backgroundColor: car.color}}></Color>
      </td>
      <td>
        <button onClick={() => handleDelete(car.plate)}>Excluir</button>
      </td>
    </tr>
  );
}

const Img = styled.img`
  max-width: 120px;
  max-height: 120px;
`;

const Color = styled.div`
  width: 3rem;
  height: 3rem;
`;
