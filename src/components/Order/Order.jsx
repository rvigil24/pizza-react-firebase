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

const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid lightgray;
`;

const OrderItem = styled.div`
  padding: 10px 0px;
`;

export const Order = ({ orders, setOrders }) => {
  return (
    <OrderStyled>
      <OrderContent>
        {orders.length > 0 ? (
          <>
            <h2 >Your order</h2>
            {orders.map((order, index) => (
              <OrderContainer key={index}>
                <OrderItem>{order.name}</OrderItem>
              </OrderContainer>
            ))}
          </>
        ) : (
          "Your order looks pretty empty..."
        )}
      </OrderContent>
      <FoodDialogFooter>
        <ConfirmButtonStyled>Checkout</ConfirmButtonStyled>
      </FoodDialogFooter>
    </OrderStyled>
  );
};
