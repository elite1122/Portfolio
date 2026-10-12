import React from 'react';
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
        <div className='min-h-screen bg-gradient-to-br from-black via-gray-950 to-black relative overflow-hidden'>
            {/* Animated background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl animate-bounce-slow"></div>
                
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>
            
            <div className='relative z-10'>
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000}
                    theme="dark"
                    toastStyle={{
                        background: 'rgba(17, 24, 39, 0.98)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(55, 65, 81, 0.8)',
                        color: '#e5e7eb',
                        boxShadow: '0 10px 40px rgba(6, 182, 212, 0.2)'
                    }}
                />
                <Navbar />
                <Banner />
                <AboutMe />
                <Skills />
                <Experience />
                <Education />
                <Project />
                <ContactForm />
                <Footer />
            </div>
        </div>
    );
};

export default Home;