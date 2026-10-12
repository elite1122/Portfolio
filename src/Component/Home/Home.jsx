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
    <div className="min-h-screen bg-obsidian-950 text-ivory-300 relative selection:bg-lime-accent selection:text-obsidian-950 font-sans overflow-x-hidden">
      {/* Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-lime-accent focus:text-obsidian-950 focus:font-mono focus:text-xs focus:font-semibold focus:rounded-md focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-ivory-100"
      >
        Skip to main content
      </a>

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
          <Project />
          <Experience />
          <Skills />
          <AboutMe />
          <Education />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;