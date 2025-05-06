import React from 'react';

const educationData = [
    {
        universityName: "Boston University",
        universityUrl: "https://www.linkedin.com/school/boston-university/about/",
        degree: "Master of Science in Computer Science",
        period: "Sep 2022 – May 2024",
        location: "Boston, MA",
        bullets: [
            "Focused on Artificial Intelligence, Machine Learning, Cloud Computing, and Distributed Systems"
        ]
    },
    {
        universityName: "Savitribai Phule Pune University",
        universityUrl: "https://www.linkedin.com/school/university-of-pune/about/",
        degree: "Bachelor of Engineering in Computer Engineering",
        period: "Aug 2017 – Jun 2021",
        location: "Pune, India",
        bullets: [
            "Capstone: E-Health Patient Management System which uses Voice Recognition and Machine Learning to predict diseases based on symptoms."
        ]
    }
];

const EducationItem = ({ universityName, universityUrl, degree, period, location, bullets }) => (
    <div className="mb-6">
        <a href={universityUrl} target="_blank" rel="noopener noreferrer">
            <h2 className="text-xl font-semibold hover:underline text-[#fed9bc]">{universityName}</h2>
        </a>
        <p className="text-sm text-[#ece3dc]">{degree}</p>
        <p className="text-sm text-[#ece3dc]">{period} | {location}</p>
        <ul className="list-disc list-inside text-sm text-[#ece3dc] mt-2">
            {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
            ))}
        </ul>
    </div>
);

function Education() {
    return (
        <div className="px-8 py-6">
            <h2 className="text-2xl font-bold mb-4 text-[#fed9bc]">Education</h2>
            {educationData.map((edu, index) => (
                <EducationItem key={index} {...edu} />
            ))}
        </div>
    );
}

export default Education;
