'use client';

import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { initializeAnalytics } from '../firebase/analytics';

const Socials = () => {
    const socialLinks = [
        {
            name: 'GitHub',
            icon: <FaGithub className="w-8 h-8" />,
            url: 'https://github.com/shohaibmallick',
            color: 'hover:text-gray-800'
        },
        {
            name: 'LinkedIn',
            icon: <FaLinkedin className="w-8 h-8" />,
            url: 'https://linkedin.com/in/shohaibmallick',
            color: 'hover:text-blue-600'
        },
        {
            name: 'Twitter',
            icon: <FaTwitter className="w-8 h-8" />,
            url: 'https://twitter.com/shohaibmallick',
            color: 'hover:text-blue-400'
        },
        {
            name: 'Email',
            icon: <MdEmail className="w-8 h-8" />,
            url: 'mailto:contact@shohaibmallick.com',
            color: 'hover:text-red-500'
        }
    ];

    useEffect(() => {
        initializeAnalytics();
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#EDF5FC] to-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Connect With Me</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6 bg-white rounded-lg shadow-lg">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center p-4 rounded-lg transition-all duration-300 transform hover:scale-105 ${social.color}`}
                        >
                            {social.icon}
                            <span className="mt-2 text-sm font-medium">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Socials;