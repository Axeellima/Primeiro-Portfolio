import styled from "@emotion/styled";
import image from "../../assets/background.jpg";

export const HeaderStyles = styled.header`
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  backface-visibility: hidden;
  animation-timing-function: ease-in-out;
  animation-delay: 5s;
  background-image: url(${image});

  width: 100%;
  height: 70vh;
`;
