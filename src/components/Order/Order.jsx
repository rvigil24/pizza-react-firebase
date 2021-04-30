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

const DetailItem = styled.div`
  color: gray;
  font-size: 10px;
`;

export const Order = ({ orders, setOrders, setOpenFood }) => {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const deleteItem = (index) => {
    const newOrders = [...orders];
    newOrders.splice(index, 1);
    setOrders(newOrders);
  };

  const tax = subtotal * 0.13;
  const total = subtotal + tax;
  return (
    <OrderStyled>
      <OrderContent>
        {orders.length > 0 ? (
          <>
            <h2>Your order</h2>

            {/* items list */}
            {orders.map((order, index) => {
              return (
                <OrderContainer key={index}>
                  {/* item */}
                  <OrderItem>
                    <div>{order.quantity}</div>
                    <div>{order.name}</div>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteItem(index)}
                    >
                      🗑️
                    </div>
                    <div>{formatPrice(getPrice(order))}</div>
                  </OrderItem>

                  {/* item details */}
                  <DetailItem>
                    {order.toppings
                      .filter((t) => t.checked)
                      .map((t) => t.name)
                      .join(", ")}
                  </DetailItem>
                  {order.choices && (
                    <DetailItem>{order.choices.value}</DetailItem>
                  )}
                </OrderContainer>
              );
            })}

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
