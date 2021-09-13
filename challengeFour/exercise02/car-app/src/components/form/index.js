import styled from 'styled-components';

export function Form({handleSubmit}) {
  return (
    <FormSt>
      <form onSubmit={handleSubmit}>
        <label htmlFor="image">URL Image:</label>
        <Input type="text" name="image" />

        <label htmlFor="brandmodel">Brand/Model:</label>
        <Input type="text" name="brandmodel" />

        <label htmlFor="year">Year:</label>
        <Input type="number" name="year" />

        <label htmlFor="plate">Plate:</label>
        <Input type="text" name="plate" />

        <label htmlFor="color">Color:</label>
        <InputColor type="color" name="color" />

        <Btn type="submit">Submit Car</Btn>
      </form>
    </FormSt>
  );
}

const FormSt = styled.div`
  background-color: rgb(233, 233, 233);
  padding: 3rem 5rem;
  margin: 10px;
`;

const Input = styled.input`
  display: block;
  border: none;
  padding: 5px;
  width: 100%;
  margin: 3px 0 15px 0;
`;

const InputColor = styled.input`
  display: block;
  border: none;
  padding: 5px;
  margin: 3px 0 15px 0;
`;

const Btn = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: rgb(179, 178, 178);
  }
`;