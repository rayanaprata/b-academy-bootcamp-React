import "./index.css";

export function CarItem({car, handleDelete}) {
  return (
    <tr>
      <td>
        <img src={car.image} alt={car.brandModel} />
      </td>
      <td>{car.plate}</td>
      <td>{car.brandModel}</td>
      <td>{car.year}</td>
      <td>
        <div style={{backgroundColor: car.color}}></div>
      </td>
      <td>
        <button onClick={() => handleDelete(car.plate)}>Excluir</button>
      </td>
    </tr>
  );
}
