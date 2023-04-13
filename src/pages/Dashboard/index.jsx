import HeaderDashboard from '../../components/HeaderDashboard'
import ContainerDashboard from '../../components/ContainerDashboard'
import WorkSection from '../../components/WorkSection'
import AboutSection from '../../components/AboutSection'
import ContactSection from '../../components/ContactSection'
import { useState } from 'react'

const Dashboard = () => {
  const [language, setLanguage] = useState('en')
  return (
    <>
      <HeaderDashboard language={language} setLanguage={setLanguage} />
      <ContainerDashboard language={language} />
      <WorkSection language={language} />
      <AboutSection language={language} />
      <ContactSection language={language} />
    </>
  )
}
export default Dashboard
