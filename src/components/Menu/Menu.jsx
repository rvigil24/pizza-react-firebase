import React from "react";
import styled from "styled-components";

import { FoodData } from "../../FoodData";

import { FoodGrid, Food, FoodLabel } from "../FoodGrid/FoodGrid";

const MenuStyled = styled.div`
  margin: 0px 400px 50px 20px;
`;

export const Menu = () => {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <FoodGrid>
        {FoodData.map((food) => {
          return (
            <Food key={food.id} img={food.img}>
              <FoodLabel>{food.name}</FoodLabel>
            </Food>
          );
        })}
      </FoodGrid>
    </MenuStyled>
  );
};
