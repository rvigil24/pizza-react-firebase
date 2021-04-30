import styled from "styled-components";
import { pizzaRed } from "../../styles/colors";
import { Title } from "../../styles/title";

//hooks
import { useQuantity } from "../../hooks/useQuantity";
import { useToppings } from "../../hooks/useToppings";
import { useChoice } from "../../hooks/useChoice";

//data
import { formatPrice, getPrice } from "../../FoodData";

//components
import { FoodLabel } from "../FoodGrid/FoodGrid";
import { QuantityInput } from "./QuantityInput";
import { Toppings } from "./Toppings";
import { Choices } from "./Choices";

export const FoodDialogStyled = styled.div`
  max-height: calc(100% - 100px);
  width: 500px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  left: calc(50% - 250px);
  background-color: white;
  z-index: 11;
`;

export const FoodDialogShadowStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 11;
`;

const FoodDialogBannerStyled = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => (img ? `background-image: url(${img});` : `min-height: 75px;`)}
  background-position: center;
  background-size: cover;
`;

const FoodDialogBannerNameStyled = styled(FoodLabel)`
  font-size: 30px;
  padding: 5px 40px;
  top: ${({ img }) => (img ? `100px` : `20px`)};
`;

export const FoodDialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
  padding: 0px 40px;
  padding-bottom: 50px;
`;

export const ConfirmButtonStyled = styled(Title)`
  height: 20px;
  width: 200px;
  padding: 10px;
  margin: 10px;
  color: white;
  background-color: ${pizzaRed};
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    `
  pointer-events: none;
  opacity: 0.5;
  background-color: gray;
  `}
`;

export const FoodDialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

const hasToppings = (food) => {
  return food.section === "Pizza";
};

const FoodDialogContainer = ({ openFood, setOpenFood, orders, setOrders }) => {
  const quantity = useQuantity(openFood && openFood.quantity);
  const toppings = useToppings(openFood.toppings);
  const choiceRadio = useChoice(openFood.choice);

  const order = {
    ...openFood,
    quantity: quantity.value,
    toppings: toppings.toppings,
    choices: choiceRadio,
  };

  const close = () => {
    setOpenFood(null);
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    close();
  };
  
  return (
    openFood && (
      <>
        <FoodDialogStyled>
          {/* banner */}
          <FoodDialogBannerStyled img={openFood.img}>
            <FoodDialogBannerNameStyled>
              {openFood.name}
            </FoodDialogBannerNameStyled>
          </FoodDialogBannerStyled>

          {/* content */}
          <FoodDialogContent>
            <QuantityInput quantity={quantity} />
            {hasToppings(openFood) && (
              <>
                <br />
                <h3>Would you like toppings?</h3>
                <Toppings {...toppings} />
              </>
            )}
            {openFood.choices && (
              <Choices openFood={openFood} choiceRadio={choiceRadio} />
            )}
          </FoodDialogContent>

          {/* footer */}
          <FoodDialogFooter>
            <ConfirmButtonStyled
              disabled={openFood.choices && !choiceRadio.value}
              onClick={addToOrder}
            >
              Add to order: {formatPrice(getPrice(order))}
            </ConfirmButtonStyled>
          </FoodDialogFooter>
        </FoodDialogStyled>
        <FoodDialogShadowStyled onClick={close} />
      </>
    )
  );
};

export const FoodDialog = (props) => {
  if (!props.openFood) return null;
  return <FoodDialogContainer {...props} />;
};
