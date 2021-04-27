import styled from "styled-components";
import { pizzaRed } from "../../styles/colors";
import { Title } from "../../styles/title";

//components
import { FoodLabel } from "../FoodGrid/FoodGrid";

const FoodDialogStyled = styled.div`
  max-height: calc(100% - 100px);
  width: 500px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 75px;
  left: calc(50% - 250px);
  background-color: white;
  z-index: 5;
`;

const FoodDialogShadowStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const FoodDialogBannerStyled = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const FoodDialogBannerNameStyled = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const FoodDialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
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
`;

export const FoodDialogFooter = styled.div`
  box-shadow: 0px -2px 10px 0px grey;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const FoodDialog = ({ openFood, setOpenFood }) => {
  function close() {
    setOpenFood(null);
  }

  if (!openFood) return null;

  return (
    openFood && (
      <>
        <FoodDialogStyled >
          {/* banner */}
          <FoodDialogBannerStyled img={openFood.img}>
            <FoodDialogBannerNameStyled>
              {openFood.name}
            </FoodDialogBannerNameStyled>
          </FoodDialogBannerStyled>

          {/* content */}
          <FoodDialogContent></FoodDialogContent>

          {/* footer */}
          <FoodDialogFooter>
            <ConfirmButtonStyled>Add to order</ConfirmButtonStyled>
          </FoodDialogFooter>
        </FoodDialogStyled>
        <FoodDialogShadowStyled onClick={close}/>
      </>
    )
  );
};
