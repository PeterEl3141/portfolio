import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectList from './components/ProjectList.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <ProjectList />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
