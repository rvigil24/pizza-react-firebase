import react from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
  height: 200px;
  border: 1px solid red;
  background-image: url("https://res.cloudinary.com/dfrcck8j7/image/upload/v1619486582/pizza-react-firebase/background/pexels-ilya-alexeeff-5735845_jmvbvb.jpg");
  background-position: center;
  background-size: cover;
  filter: brightness(75%);
`;

export const Banner = () => {
  return <BannerStyled/>
};
