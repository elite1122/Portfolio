import React from 'react';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div className='bg-[#0D2438]'>
            <div className='min-h-screen w-4/5 max-w-[1440px] mx-auto'>
                <ToastContainer position="top-right" autoClose={3000} />
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default Home;