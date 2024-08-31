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
        <footer className="bg-black  w-full flex flex-col text-center space-y-8 p-2 md:p-2 lg:p-2 lg:border lg:border-zinc-900 md:border md:border-zinc-900">
            {/* Heading Section */}
            <div className="text-white">
                <h2 className="text-xl md:text-xl font-bold mb-1 tracking-wide">Join Our Waiting List</h2>
                <p className="text-sm md:text-sm" style={{ color: "#FFFFFF99" }}>
                    Stay tuned and join our waiting list to get further updates about us
                </p>
            </div>

            {/* Email Subscription Section */}
            <form
                onSubmit={handleSubmit}
                className="flex items-center p-2 px-4 rounded-full space-x-2 w-full max-w-lg md:max-w-2xl"
                style={{ marginTop: "20px", backgroundColor: "#FFFFFF1A" }}
            >
                <FaEnvelope className="text-white text-lg md:text-xl" />
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={handleEmailChange}
                    className="flex-grow bg-transparent text-zinc-400 placeholder-zinc-500 focus:outline-none" required
                />
                <button
                    type="submit"
                    className="bg-white text-black px-3 md:px-5 py-2 rounded-full hover:bg-gray-200 transition duration-200"
                >
                    Send
                </button>
            </form>

            {/* Social Media Section */}
            <div className="text-white space-y-2" style={{ marginTop: "5px" }}>
                <p className="text-sm md:text-base mb-5" style={{ color: "#FFFFFF99" }}>Social: follow us on</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://www.linkedin.com/company/crumbsapp/" target='_blank' className="p-4 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500" style={{ backgroundColor: "#FFFFFF1A" }}>
                        <FaLinkedinIn className="text-white text-lg md:text-xl" />
                    </a>
                    <a href="https://www.instagram.com/crumbsinvest/" target='_blank' className="p-4 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500" style={{ backgroundColor: "#FFFFFF1A" }}>
                        <FaInstagram className="text-white text-lg md:text-xl" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-gray-400 text-sm md:text-sm" style={{ marginTop: "20px", color: "#FFFFFF99" }}>
                <p>Copyright ©2024 crumbs All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
