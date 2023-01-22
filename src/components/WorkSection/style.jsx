import styled from "@emotion/styled";

export const WorkDiv = styled.section`
  width: 100%;
  height: 100%;
  background-color: #1d2b41;
  padding-bottom: 80px;

  h1 {
    padding-top: 30px;
    color: #e5e4e2;
    font-size: 24px;
  }

  .div-carrousel {
    width: 100%;
  }
  .swiper {
    padding-top: 30px;
    width: 90%;
    height: 80%;
  }
  .swiper-slide img {
    width: 100%;
    height: 50%;
  }
  @media (min-width: 410px) {
    h1 {
      padding-top: 40px;
    }
    .swiper {
      padding-top: 40px;
      width: 80%;
    }
    .swiper-slide img {
      width: 100%;
      height: auto;
    }
  }
`;
