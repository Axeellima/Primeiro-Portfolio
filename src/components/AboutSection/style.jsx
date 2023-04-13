import styled from 'styled-components'

export const AboutSectionStyle = styled.section`
  height: 600px;
  background: linear-gradient(180deg, #1a2a44 20%, #0c1f3d 60%);
  h1 {
    padding-top: 0px;
    color: var(--grey3);
    font-size: 24px;
  }
  .profile {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .info {
      width: 100%;

      h2 {
        padding-top: 40px;
        font-size: 20px;
        color: var(--white);
      }
      h3 {
        padding-top: 10px;
        font-size: 18px;
        color: var(--grey2);
      }
      h4 {
        padding: 10px 10px 0px 10px;
        font-size: 16px;
        color: var(--grey2);
      }
    }
    .techs {
      padding-top: 40px;
      width: 350px;
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      justify-content: center;
      div {
        z-index: 1;
        width: 100px;
        border-radius: 8px;
        display: flex;
        padding: 5px;
        justify-content: center;
        background-color: #205275;
      }
      h1 {
        width: 260px;
        padding-bottom: 15px;
        font-size: 24px;
        color: #e5e4e2;
      }
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
  @media (min-width: 900px) {
    height: 400px;
    .profile {
      gap: 20px;
      .info {
        width: 500px;
        text-align: start;

        h2 {
          font-size: 24px;
        }
        h3 {
          padding-top: 20px;
          font-size: 22px;
        }
        h4 {
          text-align: start;

          padding: 30px 10px 10px 0px;
          font-size: 20px;
        }
      }
    }
  }
`
