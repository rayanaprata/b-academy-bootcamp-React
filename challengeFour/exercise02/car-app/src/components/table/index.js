import styled from 'styled-components';
import {CarItem} from "../car-item/index";

export function Table({cars, handleDelete}) {
  return (
    <TableSt>
      <thead>
        <tr>
          <Th>Image</Th>
          <Th>Brand/Model</Th>
          <Th>Year</Th>
          <Th>Plate</Th>
          <Th>Color</Th>
          <Th></Th>
        </tr>
      </thead>
      <tbody>
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarItem key={car.plate} car={car} handleDelete={handleDelete} />
          ))
        ) : (
          <tr>
            <Td colSpan="6">Nenhum carro cadastrado.</Td>
          </tr>
        )}
      </tbody>
    </TableSt>
  );
}

const Th = styled.th`
  border: 1px solid rgb(51, 51, 51);
`;

const Td = styled.td`
  border: 1px solid rgb(51, 51, 51);
`;


const TableSt = styled.table`
  border-collapse: collapse;
  text-align: center;
`;
