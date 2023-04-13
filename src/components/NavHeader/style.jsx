import styled from 'styled-components'

export const NavHeaderStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.backgroundHeader};
  opacity: ${(props) => (props.backgroundHeader === 'black' ? 0.85 : 1)};
  height: 95px;
  display: flex;
  z-index: 2;
  padding-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .language {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    p {
      font-size: 16px;

      color: var(--white);
    }
    img {
      width: 40px;
    }
  }
  .nav-bar {
    height: 21px;
    display: flex;
    font-size: 12px;
    gap: 10px;
  }
  .nav-items {
    width: auto;
    font-size: 18px;
    text-decoration: none;
    font-weight: 400;
    color: var(--white);
  }
  .nav-items:hover {
    background-color: var(--white);
    color: var(--grey1);
    cursor: pointer;
    user-select: none;
  }
  .div-icons {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 900px) {
    display: flex;
    padding-bottom: 20px;
    height: 85px;
    justify-content: space-between;
    .nav-bar {
      margin-left: 30px;
    }
    .nav-items {
      height: 21px;
    }
    .div-icons {
      margin-right: 30px;
    }
  }
  @media (max-width: 700px) {
    height: 50px;
    justify-content: flex-start;
    padding-top: 0px;
    padding: 5px 0 0 5px;
    align-items: baseline;
    svg {
      color: var(--white);
      width: 40px;
      height: 40px;
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 160px;
      height: 200px;

      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 12px 16px;
      z-index: 1;
      h2,
      a {
        font-size: 20px;
        text-decoration: none;
        color: var(--grey1);
        width: 100%;
      }
      .language {
        display: flex;
        margin-top: 10px;
        align-items: center;
        gap: 5px;
        justify-content: center;
        p {
          color: var(--grey1);
        }
        img {
          width: 40px;
        }
      }
    }

    .dropdown:hover .dropdown-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
`
