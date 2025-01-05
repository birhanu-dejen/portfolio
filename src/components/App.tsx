import Navbar from "./Navbar/navBar";
import Experience from "./experience/experience";
//import Card from "./card/Card";
import Footer from "./footer/footer";
import Contact from "./contact/contact";
import Home from "./home/home";
import Project from "./project/project";
import Skill from "./skill/skill";
function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <Skill />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
