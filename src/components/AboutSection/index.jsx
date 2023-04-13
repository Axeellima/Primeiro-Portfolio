import { AboutSectionStyle } from './style'
import javascriptIcon from '../../assets/js.png'
import reactIcon from '../../assets/react.png'
import nodeIcon from '../../assets/node.png'
import mongoIcon from '../../assets/mongodb.png'
import pythonIcon from '../../assets/python.png'
import postgreIcon from '../../assets/postgre.png'

const AboutSection = ({ language }) => {
  return (
    <AboutSectionStyle id='about'>
      {language === 'en' ? <h1>About:</h1> : <h1>Sobre:</h1>}
      <div className='profile'>
        <div className='info'>
          <h2>Axel Lima</h2>
          {language === 'en' ? (
            <>
              <h3>Web Developer</h3>
              <h4>
                I am a web developer and study and practice in the area for more
                than a year counting on numerous projects already carried out.
                Since my first notebook the passion for technology was the first
                view, where curiosity led me to learn more and more about
                hardware and software.
              </h4>
            </>
          ) : (
            <>
              <h3>Desenvolvedor Web</h3>
              <h4>
                Sou desenvolvedor web e estudo e pratico na área a mais de um
                ano contando com inúmeros projetos já realizados. Desde meu
                primeiro notebook a paixão pela tecnologia foi a primeira vista,
                onde a curiosidade me levou a aprender cada vez mais sobre
                hardware e software.
              </h4>
            </>
          )}
        </div>
        <div className='techs'>
          {language === 'en' ? (
            <h1>My skills:</h1>
          ) : (
            <h1>Minhas habilidades:</h1>
          )}

          <div>
            <img src={javascriptIcon} alt='JavaScript' />
          </div>
          <div>
            <img src={reactIcon} alt='React' />
          </div>
          <div>
            <img src={nodeIcon} alt='Node' />
          </div>
          <div>
            <img src={mongoIcon} alt='Mongo' />
          </div>
          <div>
            <img src={pythonIcon} alt='Python' />
          </div>
          <div>
            <img src={postgreIcon} alt='PostgreSQL' />
          </div>
        </div>
      </div>
    </AboutSectionStyle>
  )
}

export default AboutSection
