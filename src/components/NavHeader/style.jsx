import styled from "styled-components";

export const NavHeaderStyle = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  transition: all 0.3s ease-in-out;
  background-color: ${(props) => props.backgroundHeader};
  height: 95px;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .nav-bar {
    height: 21px;
    display: flex;
    font-size: 12px;
    gap: 10px;
  }
  .nav-items {
    width: auto;
    font-weight: 400;
    color: var(--white);
  }
  .nav-items:hover {
    background-color: var(--white);
    color: var(--grey-1);
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
`;
