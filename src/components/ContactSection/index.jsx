import { ContactSectionStyle } from './style'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
const ContactSection = ({ language }) => {
  return (
    <ContactSectionStyle id='contact'>
      {language === 'en' ? <h1>Contact:</h1> : <h1>Contato:</h1>}
      <div className='contact-list'>
        <div>
          <EmailIcon />
          <h2>axeellima@gmail.com</h2>
        </div>
        <div>
          <GitHubIcon />
          <h2>@Axeellima</h2>
        </div>
        <div>
          <WhatsAppIcon />
          <h2>(44) 99105-3179</h2>
        </div>
      </div>
    </ContactSectionStyle>
  )
}

export default ContactSection
