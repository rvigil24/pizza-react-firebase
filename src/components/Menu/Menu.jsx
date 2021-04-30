import React from "react";
import styled from "styled-components";

import { foods, formatPrice } from "../../FoodData";

import { FoodGrid, Food, FoodLabel } from "../FoodGrid/FoodGrid";

const MenuStyled = styled.div`
  margin: 10px 400px 50px 20px;
`;

export const Menu = ({ setOpenFood }) => {
  return (
    <MenuStyled>
      {Object.entries(foods).map(([sectionName, foods]) => (
        <React.Fragment key={sectionName}>
          <h1>{sectionName}</h1>
          <FoodGrid>
            {foods.map((food) => {
              return (
                <Food
                  key={food.id}
                  img={food.img}
                  onClick={() => setOpenFood(food)}
                >
                  <FoodLabel>
                    <div>{food.name} </div>
                    <div>{formatPrice(food.price)} </div>
                  </FoodLabel>
                </Food>
              );
            })}
          </FoodGrid>
        </React.Fragment>
      ))}
    </MenuStyled>
  );
};
