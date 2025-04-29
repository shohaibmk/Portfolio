import React from 'react'

const experienceData = [
    {
        companyName: "Find Me LLC",
        companyUrl: "https://www.linkedin.com/company/findmeee/about/",
        position: "Fullstack Developer Intern",
        period: "Dec 2024 – Present",
        location: "Remote",
        bullets: [
            "Led a team of 12 engineers to build scalable and extensible microservices aligned with platform reliability goals",
            "Designed and deployed RESTful APIs and GraphQL endpoints to support modular backend services and improve data integration",
            "Developed typo-tolerant search using fuzzy logic, enhancing user discoverability and reducing bounce rate",
            "Improved backend performance by optimizing API response time, achieving significant latency reduction",
            "Integrated fault-tolerant data layers with PostgreSQL, MongoDB, and Redis",
            "Built centralized observability infrastructure using OpenTelemetry, Promtail, and Grafana Loki for real-time monitoring",
            "Implemented secure, scalable OAuth2/JWT authentication, following modern software engineering best practices",
            "Deployed production-grade pipelines with GitLab CI/CD, enhancing delivery speed and system reliability"
        ]
    }
];

function Experience() {
    return (
        <div>
            <div className="px-8 py-6">
                <h1 className="text-2xl font-bold mb-4">Experience</h1>
                <div className="mb-6">
                    <a href={experienceData[0].companyUrl} target="_blank" rel="noopener noreferrer">
                        <h2 className="text-xl font-semibold hover:underline">{experienceData[0].companyName}</h2>
                    </a>
                    <p className="text-sm text-gray-600">{experienceData[0].position}</p>
                    <p className="text-sm text-gray-500">{experienceData[0].period} | {experienceData[0].location}</p>
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                        {experienceData[0].bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience
