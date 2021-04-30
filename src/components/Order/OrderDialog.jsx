import {
  FoodDialog,
  FoodDialogContent,
  FoodDialogShadowStyled,
  FoodDialogFooter,
  ConfirmButtonStyled,
} from "../FoodDialog/FoodDialog";

export const OrderDialog = () => {
  return (
    <>
      <FoodDialogShadowStyled />
      <FoodDialog>
        <FoodDialogContent>
          <h2>Your order is on the way!</h2>
        </FoodDialogContent>
        <FoodDialogFooter>
          <ConfirmButtonStyled>I'm still hungry</ConfirmButtonStyled>
        </FoodDialogFooter>
      </FoodDialog>
    </>
  );
};
