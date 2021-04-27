import React from "react";
import styled from "styled-components";

import { pizzaRed } from "../../styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled.div`
  display: flex;
  height: 24px;
  font-family: "Righteous", Arial, Helvetica, sans-serif;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaRed};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaRed};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
    pointer-events: none;`}
  &:hover {
    background-color: #ffe3e3;
  }
`;

export const QuantityInput = ({ quantity }) => {
  const isDisabled = () => {
    return quantity.value < 2;
  };

  return (
    <IncrementContainer>
      <div>quantity:</div>
      <IncrementButton
        onClick={() => quantity.setValue(quantity.value - 1)}
        disabled={isDisabled()}
      >
        -
      </IncrementButton>
      <QuantityInputStyled {...quantity} />
      <IncrementButton onClick={() => quantity.setValue(quantity.value + 1)}>
        +
      </IncrementButton>
    </IncrementContainer>
  );
};
