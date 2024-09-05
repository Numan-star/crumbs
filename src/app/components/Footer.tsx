'use client';
import React, { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/send-email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ email }),
            });

            if (response.ok) {
                const result = await response.json();
                setEmail('');
                toast.success('Our team will be in touch with you soon.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <footer className="bg-black w-full flex flex-col text-center space-y-8 p-2 md:p-2 lg:p-2 border-0">
                {/* Heading Section */}
                <div className="text-white">
                    <h2 className="text-xl font-bold mb-2 tracking-wide md:text-2xl lg:text-3xl md:mt-10 lg:mt-15">Join our waitlist to be the first to hear when our platform goes live!</h2>
                    <p className="text-sm md:text-lg lg:text-xl md:mb-5 lg:mb-5 text-[#FFFFFF99]">
                        Stay tuned and join our waiting list to get further updates about us
                    </p>
                </div>

                {/* Email Subscription Section */}
                <form
                    onSubmit={handleSubmit}
                    className="flex items-center justify-center p-2 px-4 rounded-full space-x-2 w-full max-w-lg md:max-w-3xl lg:max-w-4xl mx-auto bg-[#FFFFFF1A]"
                >
                    <FaEnvelope className="text-white text-lg md:text-xl" />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                        className="flex-grow bg-transparent text-zinc-400 placeholder-zinc-500 focus:outline-none sm:ml-2"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-white text-black px-3 md:px-5 py-2 rounded-full hover:bg-gray-200 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>

                {/* Social Media Section */}
                <div className="text-white space-y-2 mt-5 md:mt-10 lg:mt-10">
                    <p className="text-sm md:text-base lg:text-lg my-5 font-bold text-gray-300">Check us out on social media!</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.linkedin.com/company/crumbsapp/" target='_blank' className="p-4 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500 bg-[#FFFFFF1A]">
                            <FaLinkedinIn className="text-white text-lg md:text-xl" />
                        </a>
                        <a href="https://www.instagram.com/crumbsinvest/" target='_blank' className="p-4 md:p-4 rounded-full hover:bg-gray-700 transition duration-200 border border-zinc-500 bg-[#FFFFFF1A]">
                            <FaInstagram className="text-white text-lg md:text-xl" />
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-gray-400 text-sm md:text-sm text-[#FFFFFF99]">
                    <p>Copyright ©2024 crumbs All Rights Reserved.</p>
                </div>
            </footer>
            <ToastContainer />
        </>
    );
};

export default Footer;
