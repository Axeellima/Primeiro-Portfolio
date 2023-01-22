import { HeaderStyles } from "./style";
import NavHeader from "../NavHeader";

const HeaderDashboard = ({ goToBot }) => {
  return (
    <>
      <HeaderStyles>
        <NavHeader goToBot={goToBot} />
      </HeaderStyles>
    </>
  );
};
export default HeaderDashboard;
