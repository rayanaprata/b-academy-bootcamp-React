export function Form({handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="image">URL Image:</label>
      <input type="text" name="image" />

      <label htmlFor="brandmodel">Brand/Model:</label>
      <input type="text" name="brandmodel" />

      <label htmlFor="year">Year:</label>
      <input type="number" name="year" />

      <label htmlFor="plate">Plate:</label>
      <input type="text" name="plate" />

      <label htmlFor="color">Color:</label>
      <input type="color" name="color" />

      <button type="submit">Submit Car</button>
    </form>
  );
}
