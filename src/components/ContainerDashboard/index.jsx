import { MainContainer } from './style'
import useWidthPosition from '../../hooks/useWidth'

const ContainerDashboard = ({ language }) => {
  const widthPosition = useWidthPosition()
  return (
    <MainContainer>
      <div className='div-picture'>
        <img
          src='https://media.licdn.com/dms/image/C4D03AQFWyDxiVdcSeQ/profile-displayphoto-shrink_200_200/0/1658196039633?e=1678924800&v=beta&t=F-qKzEkH_pzxyewoD-36m82uRJsncSOmGM8qNfNL-Ck'
          alt=''
          className='profile-picture'
        />
        {widthPosition < 900 ? (
          language === 'en' ? (
            <h1 className='profile-text'>
              My name is Axel, I'm web developer!
            </h1>
          ) : (
            <h1 className='profile-text'>
              Meu nome é Axel, Eu sou desenvovledor web!
            </h1>
          )
        ) : language === 'en' ? (
          <h1 className='profile-text'>
            My name is Axel, I'm web developer and I create{' '}
            <span>responsive</span> sites with <span>beautiful</span> design and{' '}
            <span>CRUD API</span> in React.js and Node.js
          </h1>
        ) : (
          <h1 className='profile-text'>
            Meu nome é Axel, eu sou desenvolvedor web e eu crio sites{' '}
            <span>responsivos</span> com <span>belos</span> designs e{' '}
            <span>CRUD API</span> em React.js e Node.js
          </h1>
        )}
      </div>
    </MainContainer>
  )
}
export default ContainerDashboard
