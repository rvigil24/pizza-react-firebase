import styled from "styled-components";

//hooks

const ToppingGrid = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media(max-width: 450px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ToppingCheckbox = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  cursor: pointer;
`;

export const Toppings = ({ toppings, checkTopping }) => {
  return (
    <ToppingGrid>
      {toppings.map((topping, i) => (
        <CheckboxLabel key={i}>
          <ToppingCheckbox type="checkbox" onClick={() => checkTopping(i)} />
          {topping.name}
        </CheckboxLabel>
      ))}
    </ToppingGrid>
  );
};
