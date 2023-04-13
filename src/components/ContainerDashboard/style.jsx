import styled from '@emotion/styled'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #205275;
  width: 100%;
  height: 30vh;

  .div-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 30px;
  }
  .profile-picture {
    margin-top: 15px;
    width: 80px;
    border-radius: 100%;
  }
  .profile-text {
    width: 60%;
    margin-top: 8px;
    color: var(--grey3);
    font-size: 22px;
    font-weight: 300;
  }
  .profile-text span {
    color: var(--blue3);
    font-weight: bold;
  }
  @media (min-width: 900px) {
    .div-picture {
      padding-top: 10px;
    }
    .profile-picture {
      width: 110px;
    }
  }
`
