import styled from "styled-components";

import { Title } from "../../styles/title";

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px 0px;
  @media(max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const FoodLabel = styled(Title)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
`;

export const Food = styled.div`
  height: 100px;
  padding: 10px;
  font-size: 20px;
  background-image: ${({ img }) => img && `url(${img})`};
  background-position: center;
  background-size: cover;
  border-radius: 7px;
  margin-top: 5px;
  transition-property: box-shadow filter;
  transition-duration: 0.4s;
  box-shadow: 2.5px 2.5px 5px rgba(0, 0, 0, 0.5);
  filter: contrast(75%);
  &:hover {
    cursor: pointer;
    box-shadow: 2.5px 2.5px 5px 2.5px rgba(0, 0, 0, 0.7);
    margin-top: 0px;
    margin-bottom: 5px;
    filter: contrast(100%);
  }
`;
