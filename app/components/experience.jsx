import React from "react";

const experienceData = [
  {
    companyName: "Aaum AI",
    position: "Fullstack Software Engineer",
    period: "Sept 2025 – March 2026",
    location: "Pune, Maharashtra (India)",
    bullets: [
      "Developed and integrated scalable APIs in Node.js (TypeScript), implementing Razorpay payment processor with webhooks for a subscription-based model improving payment success rate and enabling seamless recurring billing",
      "Designed and optimized backend systems using PostgreSQL and Redis caching, reducing query response time by ~35% and enhancing overall API performance",
      "Built responsive front-end interfaces with React (TypeScript) and Tailwind CSS, leveraging Zustand for efficient, predictable state management across complex UI workflows",
      "Engineered an agentic Retrieval-Augmented Generation (RAG) service using Agno AI, Python, and FastAPI, integrating Google Custom Search for web search capability along with LanceDB for storing vector embeddings to enable semantic search and contextual retrieval",
      "Integrated multiple LLM providers (Perplexity, OpenAI, and Grok APIs) for dynamic chat completions, enhancing response diversity, reliability, and contextual accuracy in AI-driven workflows",
      "Deployed services using Docker on AWS EC2, ensuring scalable, fault-tolerant infrastructure",
    ],
    className: "mb-6 lg:pe-8",
  },
  {
    companyName: "Find Me LLC",
    companyUrl: "https://www.linkedin.com/company/findmeee/about/",
    position: "Fullstack Developer Intern",
    period: "Dec 2024 – July 2025",
    location: "Remote (NC, USA)",
    bullets: [
      "Built scalable and extensible microservices aligned with platform reliability goals",
      "Designed and deployed RESTful APIs and GraphQL endpoints to support modular backend services and improve data integration",
      "Developed typo-tolerant search using fuzzy logic, enhancing user discoverability and reducing bounce rate",
      "Improved backend performance by optimizing API response time, achieving significant latency reduction",
      "Integrated fault-tolerant data layers with PostgreSQL, MongoDB, and Redis",
      "Built centralized observability infrastructure using OpenTelemetry, Promtail, and Grafana Loki for real-time monitoring",
      "Implemented secure, scalable OAuth2/JWT authentication, following modern software engineering best practices",
      "Deployed production-grade pipelines with GitLab CI/CD, enhancing delivery speed and system reliability",
    ],
    className: "mb-6 lg:ps-8",
  },
];

function ExperienceItem({ experience }) {
  return (
    <div className={experience.className}>
      {experience.companyUrl && (
        <a
          href={experience.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-xl font-semibold hover:underline text-[#fed9bc]">
            {experience.companyName}
          </h2>
        </a>
      )}
      {!experience.companyUrl && (
        <h2 className="text-xl font-semibold text-[#fed9bc]">
          {experience.companyName}
        </h2>
      )}
      <p className="text-sm text-[#ece3dc]">{experience.position}</p>
      <p className="text-sm text-[#ece3dc]">
        {experience.period} | {experience.location}
      </p>
      <ul className="list-disc list-inside text-justify text-sm text-[#ece3dc] mt-2">
        {experience.bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <div className="px-8 py-0" style={{ fontFamily: "Georgia" }}>
      <h2 className="text-2xl font-bold mb-4 text-[#fed9bc]">Experience</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-[#fed9bc]">
        {experienceData.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
