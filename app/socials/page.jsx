'use client';

import React, { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaXTwitter, FaInstagram, FaSnapchat } from 'react-icons/fa6';
import { initializeAnalytics } from '../firebase/analytics';
import { logEvent } from 'firebase/analytics';
import { LINKS } from '../data/links';

const Socials = () => {

    const searchParams = useSearchParams();
    const platform = searchParams.get('referrer');

    const socialLinks = [
        {
            name: 'X',
            icon: <FaXTwitter className="w-8 h-8" />,
            url: 'https://x.com/shohaibmallick',
            color: 'text-black'
        },
        {
            name: 'Instagram',
            icon: <FaInstagram className="w-8 h-8" />,
            url: `${LINKS.instagram}`,
            color: 'text-pink-600'
        },
        {
            name: 'Snapchat',
            icon: <FaSnapchat className="w-8 h-8" />,
            url: 'https://snapchat.com/add/shohaibmallick',
            color: 'text-yellow-400'
        },
    ];

    useEffect(() => {
        const analytics = initializeAnalytics();
        if (platform && analytics) {

            logEvent(analytics, `referrer`, { "from": platform,
                "page": "socials"
            });
        }
    }, [platform]);

    return (
        <div className="p-8 min-h-screen bg-[#173333] flex justify-center items-center">
            <div className="max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 text-center text-[#fed9bc]">Connect With Me</h2>
                <p className="text-center text-[#fed9bc] mb-8">shohaibmk / </p>
                <div className="flex justify-center items-center grid grid-cols-1 md:grid-cols-3 gap-8 p-6 bg-white rounded-lg shadow-lg">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex flex-col items-center justify-center p-4 border border-black rounded-lg transition-all duration-300 transform hover:scale-105 ${social.color}`}
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