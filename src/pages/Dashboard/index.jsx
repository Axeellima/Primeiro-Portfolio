import HeaderDashboard from "../../components/HeaderDashboard";
import ContainerDashboard from "../../components/ContainerDashboard";
import WorkSection from "../../components/WorkSection";
import AboutSection from "../../components/AboutSection";
import ContactSection from "../../components/ContactSection";

const Dashboard = () => {
  return (
    <>
      <HeaderDashboard />
      <ContainerDashboard />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};
export default Dashboard;
