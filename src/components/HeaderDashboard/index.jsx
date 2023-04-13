import { HeaderStyles } from './style'
import NavHeader from '../NavHeader'

const HeaderDashboard = ({ goToBot, language, setLanguage }) => {
  return (
    <>
      <HeaderStyles>
        <NavHeader
          goToBot={goToBot}
          language={language}
          setLanguage={setLanguage}
        />
      </HeaderStyles>
    </>
  )
}
export default HeaderDashboard
