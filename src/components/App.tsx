import Navbar from "./Navbar/navBar";
import About from "./about/about";
//import Card from "./card/Card";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Home from "./home/home";
import Project from "./project/project";
import Skill from "./skill/skill";
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
