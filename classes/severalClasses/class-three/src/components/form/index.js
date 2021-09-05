import "./index.css";

export function Form(props) {
  return (
    <form>
      <input value={props.value} onChange={props.handleChange}></input>
      <button type="submit">Enviar</button>
    </form>
  );
}
