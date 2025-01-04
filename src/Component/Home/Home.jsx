import React from 'react';
import Navbar from '../Navbar/Navbar';
import Skills from '../Skills/Skills';
import { div } from 'framer-motion/client';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div className='bg-[#0D2438]'>
            <div className='min-h-screen w-4/5 max-w-[1440px] mx-auto'>
                <Navbar></Navbar>
                <Banner></Banner>
                <Skills></Skills>
            </div>
        </div>
    );
};

export default Home;