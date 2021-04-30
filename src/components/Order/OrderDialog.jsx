import {
  FoodDialogStyled,
  FoodDialogContent,
  FoodDialogShadowStyled,
  FoodDialogFooter,
  ConfirmButtonStyled,
} from "../FoodDialog/FoodDialog";

export const OrderDialog = ({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
}) => {
  return openOrderDialog ? (
    <>
      <FoodDialogStyled>
        <FoodDialogContent>
          <h2>🚚 Your order is on the way!</h2>
          <p>Thanks for choosing us! Your order will be sent ASAP!</p>
        </FoodDialogContent>
        <FoodDialogFooter>
          <ConfirmButtonStyled
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            I'm still hungry
          </ConfirmButtonStyled>
        </FoodDialogFooter>
      </FoodDialogStyled>
      <FoodDialogShadowStyled />
    </>
  ) : (
    <div />
  );
};
