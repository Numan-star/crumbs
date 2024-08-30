'use client';
import React, { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setEmail('');
                alert('Email sent successfully!');
            } else {
                alert('Failed to send email.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Error sending email.');
        }
    };

    return (
        <footer className="bg-black min-h-screen w-full flex flex-col justify-center items-center text-center space-y-8 p-6 md:p-12 lg:p-20">
            {/* Heading Section */}
            <div className="text-white space-y-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-wide">Join Our Waiting List</h2>
                <p className="text-sm md:text-base" style={{ color: "#FFFFFF99" }}>
                    Stay tuned and join our waiting list to get further updates about us
                </p>
            </div>

            {/* Email Subscription Section */}
            <form 
              onSubmit={handleSubmit} 
              className="flex items-center p-2 px-4 rounded-full space-x-3 w-full max-w-lg md:max-w-2xl" 
              style={{ marginTop: "50px", backgroundColor: "#FFFFFF1A" }}
            >
                <FaEnvelope className="text-white text-xl md:text-2xl" />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-grow bg-transparent text-zinc-400 placeholder-zinc-500 focus:outline-none"
                />
                <button
                    type="submit"
                    className="bg-white text-black px-4 md:px-8 py-2 rounded-full hover:bg-gray-200 transition duration-200"
                >
                    Send
                </button>
            </form>

            {/* Social Media Section */}
            <div className="text-white space-y-2" style={{ marginTop: "90px" }}>
                <p className="text-sm md:text-base mb-5" style={{ color: "#FFFFFF99" }}>Social: follow us on</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/company/crumbsapp/" target='_blank' className="p-3 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500" style={{ backgroundColor: "#FFFFFF1A" }}>
                        <FaLinkedinIn className="text-white text-xl md:text-2xl" />
                    </a>
                    <a href="https://www.instagram.com/crumbsinvest/" target='_blank' className="p-3 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500" style={{ backgroundColor: "#FFFFFF1A" }}>
                        <FaInstagram className="text-white text-xl md:text-2xl" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-gray-400 text-sm md:text-base" style={{ marginTop: "70px", color: "#FFFFFF99" }}>
                <p>Copyright ©2024 crumbs All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
