import NavSection from "./Navbar/navBar";
import ExperienceSection from "./experience/experience";
import FooterSection from "./footer/footer";
import ContactSection from "./contact/contact";
import HomeSection from "./home/home";
import ProjectSection from "./project/project";
import SkillSection from "./skill/skill";
function App() {
  return (
    <div>
      <NavSection />
      <HomeSection />
      <SkillSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
export default App;
