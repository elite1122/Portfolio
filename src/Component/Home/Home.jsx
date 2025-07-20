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

const Home = () => {
    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800'>
            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl animate-bounce-slow"></div>
            </div>
            
            <div className='relative z-10'>
                <ToastContainer 
                    position="top-right" 
                    autoClose={3000}
                    theme="dark"
                    toastStyle={{
                        background: 'rgba(30, 41, 59, 0.95)',
                        backdropFilter: 'blur(12px)',
                        border: '1px solid rgba(148, 163, 184, 0.1)',
                        color: '#f8fafc'
                    }}
                />
                <Navbar />
                <Banner />
                <AboutMe />
                <Skills />
                <Education />
                <Project />
                <ContactForm />
                <Footer />
            </div>
        </div>
    );
};

export default Home;