import {CarItem} from "../car-item/index";

export function Table({cars, handleDelete}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Brand/Model</th>
          <th>Year</th>
          <th>Plate</th>
          <th>Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {cars.length > 0 ? (
          cars.map((car) => (
            <CarItem key={car.plate} car={car} handleDelete={handleDelete} />
          ))
        ) : (
          <tr>
            <td colSpan="6">Nenhum carro cadastrado.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
