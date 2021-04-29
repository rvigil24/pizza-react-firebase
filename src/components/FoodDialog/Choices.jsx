import React from "react";
import styled from "styled-components";

const cursorPointer = `cursor: pointer;`;
const RadioInput = styled.input`
  ${cursorPointer};

  margin: 20px;
`;
const Label = styled.label`
  ${cursorPointer};
`;

export const Choices = ({ openFood, choiceRadio }) => {
  return (
    <>
      <br />
      <h3>Choose One</h3>
      {openFood.choices.map((choice, index) => (
        <React.Fragment key={index}>
          <RadioInput
            type="radio"
            id={choice}
            name="choice"
            value={choice}
            checked={choiceRadio.value === choice}
            onChange={(e) => choiceRadio.onChange(e)}
          />
          <Label for={choice}>{choice}</Label>
        </React.Fragment>
      ))}
    </>
  );
};
