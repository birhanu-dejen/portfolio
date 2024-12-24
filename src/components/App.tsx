import Navbar from "./Navbar/Navbar";
import About from "./about/About";
//import Card from "./card/Card";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Project from "./projects/Project";
import Skill from "./skills/Skill";
function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <About />
        <Skill />
        <Project />

        <Contact />
        <Footer />
      </main>
    </>
  );
}
export default App;
