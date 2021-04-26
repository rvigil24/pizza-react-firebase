import react from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
  height: 200px;
  border: 1px solid red;
  background-image: url("https://res.cloudinary.com/dfrcck8j7/image/upload/v1619481227/pizza-react-firebase/pexels-polina-tankilevitch-4109084_ekcbcw.jpg");
  background-position: center;
  background-size: cover;
  filter: contrast(105%);
`;

export const Banner = () => {
  return <BannerStyled>h</BannerStyled>;
};
