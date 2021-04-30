import styled from "styled-components";

const BannerStyled = styled.div`
  height: 200px;
  background-image: url("https://res.cloudinary.com/dfrcck8j7/image/upload/v1619486735/pizza-react-firebase/background/pexels-ilya-alexeeff-5735845_kbbo1z.jpg");
  background-position: center;
  background-size: cover;
  filter: brightness(75%);
`;

export const Banner = () => {
  return <BannerStyled/>
};
