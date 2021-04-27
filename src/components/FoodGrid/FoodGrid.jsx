import react from "react";
import styled from "styled-components";

import {Title} from "../../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0px;
`;

export const FoodLabel = styled.div`
    position: absolute;
    background-color: rgba(255,255, 255, 0.8);
    padding: 5px;
`;

export const Food = styled(Title)`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => img && `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 7px;
  box-shadow: 2.5px 2.5px 5px rgba(0,0,0, 0.5);
  filter: contrast(75%);
  &:hover{
      cursor: pointer;
      opacity: 0.7;
  }
`;
