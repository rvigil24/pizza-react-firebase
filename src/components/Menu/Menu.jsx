import React from "react";
import styled from "styled-components";

import {  foods } from "../../FoodData";

import { FoodGrid, Food, FoodLabel } from "../FoodGrid/FoodGrid";

const MenuStyled = styled.div`
  margin: 10px 400px 50px 20px;
`;

export const Menu = () => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => {
              return (
                <Food key={food.id} img={food.img}>
                  <FoodLabel>{food.name}</FoodLabel>
                </Food>
              );
            })}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};
