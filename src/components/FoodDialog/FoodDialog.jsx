import styled from "styled-components";

//components
import { FoodLabel } from "../FoodGrid/FoodGrid";

const FoodDialogStyled = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
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

export const FoodDialog = ({ openFood, setOpenFood }) => {
  function close() {
    setOpenFood(null);
  }

  if (!openFood) return null;

  return (
    openFood && (
      <>
        <FoodDialogStyled onClick={close}>
          <FoodDialogBannerStyled img={openFood.img}>
            <FoodDialogBannerNameStyled>
              {openFood.name}
            </FoodDialogBannerNameStyled>
          </FoodDialogBannerStyled>
        </FoodDialogStyled>
        <FoodDialogShadowStyled />
      </>
    )
  );
};
