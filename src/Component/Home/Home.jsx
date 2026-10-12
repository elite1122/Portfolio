import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';

const Home = () => {
  return (
    <div className="min-h-screen bg-obsidian-950 text-ivory-300 relative selection:bg-lime-accent selection:text-obsidian-950 font-sans">
      {/* Restrained Architectural Vignette */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(198, 241, 53, 0.04), transparent 70%)'
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="dark"
          toastStyle={{
            background: '#14171c',
            border: '1px solid #282e37',
            color: '#fbfbf9',
            borderRadius: '8px',
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
          }}
        />
        <Navbar />
        <main id="main-content">
          <Banner />
          <AboutMe />
          <Skills />
          <Experience />
          <Education />
          <Project />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;