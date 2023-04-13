import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MenuIcon from '@mui/icons-material/Menu'
import usaIcon from '../../assets/usa-icon.png'
import brIcon from '../../assets/brasil-icon.png'
import useWidthPosition from '../../hooks/useWidth'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { NavHeaderStyle } from './style'
import { useEffect, useState } from 'react'
import useScrollPosition from '../../hooks/scroll'

const NavHeader = ({ language, setLanguage }) => {
  const [backgroundHeader, setBackgroundHeader] = useState('none')

  const scrollPosition = useScrollPosition()
  const widthPosition = useWidthPosition()
  console.log(widthPosition)
  useEffect(() => {
    if (scrollPosition >= 200) {
      setBackgroundHeader('black')
    } else if (scrollPosition < 200) {
      setBackgroundHeader('none')
    }
  })
  return (
    <NavHeaderStyle backgroundHeader={backgroundHeader}>
      {widthPosition > 700 ? (
        <>
          <nav className='nav-bar'>
            {language === 'en' ? (
              <>
                <h2
                  className='nav-items'
                  onClick={() => {
                    window.scrollTo({ top: 0 })
                  }}
                >
                  HOME
                </h2>
                <a href='#work' className='nav-items'>
                  WORK
                </a>
                <a href='#about' className='nav-items'>
                  ABOUT
                </a>
                <a href='#contact' className='nav-items'>
                  CONTACT
                </a>
              </>
            ) : (
              <>
                <h2
                  className='nav-items'
                  onClick={() => {
                    window.scrollTo({ top: 0 })
                  }}
                >
                  INÍCIO
                </h2>
                <a href='#work' className='nav-items'>
                  PROJETOS
                </a>
                <a href='#about' className='nav-items'>
                  SOBRE
                </a>
                <a href='#contact' className='nav-items'>
                  CONTATO
                </a>
              </>
            )}
          </nav>
          <div className='div-icons'>
            <IconButton
              onClick={() => {
                window.open('https://github.com/Axeellima')
              }}
            >
              <GitHubIcon sx={{ fontSize: 35, color: 'white' }} />
            </IconButton>

            <IconButton
              onClick={() => {
                window.open('https://www.linkedin.com/in/axeellima/')
              }}
            >
              <LinkedInIcon sx={{ fontSize: 38, color: 'white' }} />
            </IconButton>
            <div className='language'>
              {language === 'en' ? (
                <>
                  <p>en-us</p>
                  <img
                    src={usaIcon}
                    alt=''
                    onClick={() => {
                      setLanguage('br')
                    }}
                  />
                </>
              ) : (
                <>
                  <p>pt-br</p>
                  <img
                    src={brIcon}
                    alt=''
                    onClick={() => {
                      setLanguage('en')
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='dropdown'>
            <MenuIcon />
            <div className='dropdown-content'>
              <h2
                onClick={() => {
                  window.scrollTo({ top: 0 })
                }}
              >
                HOME
              </h2>
              <a href='#work'>WORK</a>
              <a href='#about'>ABOUT</a>
              <a href='#contact'>CONTACT</a>
              <div className='language'>
                {language === 'en' ? (
                  <>
                    <p>en-us</p>
                    <img
                      src={usaIcon}
                      alt=''
                      onClick={() => {
                        setLanguage('br')
                      }}
                    />
                  </>
                ) : (
                  <>
                    <p>pt-br</p>
                    <img
                      src={brIcon}
                      alt=''
                      onClick={() => {
                        setLanguage('en')
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </NavHeaderStyle>
  )
}

export default NavHeader
