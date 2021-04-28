import styled from "styled-components";
import {
  FoodDialogContent,
  FoodDialogFooter,
  ConfirmButtonStyled,
} from "../FoodDialog/FoodDialog";

//data
import { formatPrice, getPrice } from "../../FoodData";

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
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

export const Order = ({ orders, setOrders }) => {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  return (
    <OrderStyled>
      <OrderContent>
        {orders.length > 0 ? (
          <>
            <h2>Your order</h2>

            {/* items list */}
            {orders.map((order, index) => (
              <OrderContainer key={index}>
                <OrderItem>
                  <div>{order.quantity}</div>
                  <div>{order.name}</div>
                  <div>{formatPrice(getPrice(order))}</div>
                </OrderItem>
              </OrderContainer>
            ))}

            {/* subtotal, tax, total */}
            <OrderContainer>
              {/* subtotal */}
              <OrderItem>
                <div />
                <div>Subtotal</div>
                <div>{formatPrice(subtotal)}</div>
              </OrderItem>

              {/* tax */}
              <OrderItem>
                <div />
                <div>Tax</div>
                <div>{formatPrice(tax)}</div>
              </OrderItem>

              {/* total */}
              <OrderItem>
                <div />
                <div>Total</div>
                <div>{formatPrice(total)}</div>
              </OrderItem>
            </OrderContainer>
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
