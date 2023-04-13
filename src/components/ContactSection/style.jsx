import styled from 'styled-components'

export const ContactSectionStyle = styled.section`
  height: 350px;
  background: linear-gradient(180deg, #0c1f3d 20%, #05142c 60%);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  h1 {
    width: 100%;
    padding-top: 30px;
    color: var(--grey3);
    font-size: 24px;
    height: 70px;
  }
  .contact-list {
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    padding-bottom: 100px;

    div {
      color: var(--grey2);
      display: flex;
      gap: 10px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  }
  @media (min-width: 800px) {
    .contact-list {
      gap: 20px;
      justify-content: center;
    }
    h1 {
      font-size: 30px;
    }
  }
`
