import Image from 'next/image';
import Nav from '@components/Nav.jsx';
import Main from '@components/Main.jsx';
import About from '@components/About.jsx';
import Skills from '@components/Skills';

const Home = () => {
  return (
    <div>
      <Nav/>
      <Main />
      <About/>
      <Skills/>
    </div>
  
  )  
}

export default Home