'use clint'
import React from 'react';

// Make sure to replace 'your-image-path.jpg' with the actual path to your image
const Header: React.FC = () => {
    return (
        <header
            className="relative bg-cover bg-center bg-no-repeat w-full flex flex-col  text-center"
            style={{
                backgroundImage: "url('/bg.png')", // Add your background image path here
            }}
        >
            <div className="text-white">
                <h2 className='text-4xl font-medium mt-8 mb-16'>Crumbs</h2>
                <p className='text-lg mt-8'>Crumbs is the first Social Funding Network </p>
            </div>
            <div className="text-white p-4">
                <h1 className="text-4xl md:text-4xl font-medium mb-0 tracking-wide">Launching</h1>
                <h1 className="text-8xl md:text-8xl font-black mb-0 tracking-wider"><span className='text-9xl md:text-9xl'>S</span>OON</h1>
                <p className='text-3xl font-normal mt-0'>Stay Tuned!</p>
                <p className="text-lg md:text-2xl mx-4 my-12 text-center">
                    <strong>A win-win situation</strong>, we are developing an evolved crowdfunding platform that takes advantage of the growing online social media economy and creating a community of entrepreneurs and investors who want to help each other.
                </p>
                <p className="text-lg md:text-2xl mx-4 text-center mb-16">
                    We combine social media with investing in order to bring a modern feel to the investment industry. Our platform is designed to simplify the investment process for everyday investors while also fostering a social atmosphere that encourages users to engage with each other throughout their investment journey.
                </p>
            </div>
        </header>
    );
};

export default Header;
