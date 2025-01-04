import React from 'react';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import Banner from '../Banner/Banner';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='bg-[#0D2438]'>
            <div className='min-h-screen w-4/5 max-w-[1440px] mx-auto'>
                <Navbar></Navbar>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;