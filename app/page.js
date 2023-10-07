import Nav from '@components/Nav.jsx';
import Main from '@components/Main.jsx';
import About from '@components/About.jsx';
import Skills from '@components/Skills';
import Projects from '@components/Projects';
import Contact from '@components/Contact';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Main />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  
  )  
}

export default Home