'use client';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header
            className="relative bg-cover bg-center bg-no-repeat w-full flex flex-col text-center"
            style={{
                backgroundImage: "url('/bg.png')",
            }}
        >
            <div className="text-white">
                <h2 className='text-xl md:text-2xl lg:text-3xl font-medium mt-2 md:my-10 lg:my-15'>Crumbs</h2>
                <p className='text-sm md:text-lg lg:text-xl mt-1'>First Social Funding Network</p>
            </div>
            <div className="text-white p-4">
                <h1 className="text-base md:text-2xl lg:text-3xl font-medium mb-0 tracking-simple md:tracking-widest lg:tracking-widest">Launching</h1>
                <h1 className="text-3xl md:text-8xl lg:text-8xl font-black mb-0 tracking-wider">
                    <span className='text-4xl md:text-9xl lg:text-10xl'>S</span>OON
                </h1>
                <p className='text-sm md:text-xl lg:text-2xl font-normal mt-0 md:mb-10 lg:mb-15'>Stay Tuned!</p>
                <p className="text-sm md:text-lg lg:text-xl mx-4 my-2 text-center md:mb-10 lg:mb-15 md:mx-20 lg:mx-20">
                    <strong>A win-win situation</strong>, we are developing an evolved crowdfunding platform that takes advantage of the growing online social media economy and creating a community of entrepreneurs and investors who want to help each other.
                </p>
                <p className="text-sm md:text-lg lg:text-xl mx-4 text-center mb-0  md:mb-10 lg:mb-15 md:mx-20 lg:mx-20">
                    We combine social media with investing in order to bring a modern feel to the investment industry. Our platform is designed to simplify the investment process for everyday investors while also fostering a social atmosphere that encourages users to engage with each other throughout their investment journey.
                </p>
            </div>
        </header>
    );
};

export default Header;
