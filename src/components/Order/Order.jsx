import styled from "styled-components";
import {
  FoodDialogContent,
  FoodDialogFooter,
  ConfirmButtonStyled,
} from "../FoodDialog/FoodDialog";

const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 48px;
  width: 340px;
  background-color: white;
  height: calc(100% - 48px);
  z-index: 10;
  box-shadow: 4px 0px 5px 5px grey;
  display: flex;
  flex-direction: column;
`;

const OrderContent = styled(FoodDialogContent)`
  padding: 20px;
  height: 100%;
`;

export const Order = () => {
  return (
    <OrderStyled>
      <OrderContent>Your order looks pretty empty...</OrderContent>
      <FoodDialogFooter>
        <ConfirmButtonStyled>Checkout</ConfirmButtonStyled>
      </FoodDialogFooter>
    </OrderStyled>
  );
};
