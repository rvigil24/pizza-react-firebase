import react from "react";
import styled from "styled-components";

const BannerStyled = styled.div`
  height: 200px;
  border: 1px solid red;
  background-image: url("https://res.cloudinary.com/dfrcck8j7/image/upload/v1619480606/pizza-react-firebase/pexels-polina-tankilevitch-4109128_cryctm.jpg");
  background-position: center;
  background-size: cover;
`;

export const Banner = () => {
  return <BannerStyled>h</BannerStyled>;
};
