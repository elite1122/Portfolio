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
        <div className='bg-[#0D2438]'>
            <div className='min-h-screen w-4/5 max-w-[1440px] mx-auto'>
                <ToastContainer position="top-right" autoClose={3000} />
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <Education></Education>
                <Project></Project>
                <ContactForm></ContactForm>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;