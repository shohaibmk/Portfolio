import React from 'react';

const PublicationCard = ({ publication }) => {
    const { title, journal, date, paperLink, citationLink, keyPoints, className } = publication;

    return (
        <div className={className}>
            <a href={citationLink} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-semibold hover:underline w-max">{title}</h2>
            </a>
            <p className="text-sm text-[#fed9bc] font-bold">
                {journal} {date && `· ${date}`} <br />
                <a href={paperLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-gray-300 rounded-2xl px-2 py-1 my-2">
                    <span>View Paper</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>            </p>
            <ul className="list-disc list-inside text-sm text-[#ece3dc] mt-2">
                {keyPoints.map((point, index) => (
                    <li key={index} className="text-justify">{point}</li>
                ))}
            </ul>
        </div>
    );
};

function Research() {
    const publications = [
        {
            title: "An E-Health Patient Management System.",
            journal: "Grenze International Journal of Engineering & Technology (GIJET) · 2021 · Vol 7 · Issue 2 · Page 41-46",
            citationLink: "https://openurl.ebsco.com/EPDB%3Agcd%3A13%3A34765981/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A152542807&crl=c&link_origin=scholar.google.com",
            paperLink: "https://thegrenze.com/index.php?display=page&view=journalabstract&absid=934&id=8",
            keyPoints: [
                "Voice-Based Patient Interaction: The system enables patients to describe their symptoms via voice, which is transcribed using speech recognition and processed using Natural Language Processing (NLP) to extract relevant medical information.",
                "Disease Prediction Using Machine Learning: Extracted symptoms are analyzed using a Random Forest algorithm, achieving a prediction accuracy of 93.55% across 41 diseases, using a dataset of 4920 records.",
                "System Components and Technologies: The architecture integrates speech-to-text processing using Mel Frequency Cepstral Coefficients (MFCC), NLP for symptom extraction, and a web-based interface for remote consultation and record management.",
                "Future Scope: Plans include incorporating medicine recommendations, multilingual support for local languages, and building a complete electronic medical records system for improved accessibility and long-term care."
            ],
            className: "mb-6 lg:pe-8"
        },
        {
            title: "Proposed Model of Speech Recognition using MFCC and DNN",
            journal: "International Journal of Engineering Research & Technology (IJERT)",
            date: "May 10, 2020",
            citationLink: "https://www.ijert.org/proposed-model-of-speech-recognition-using-mfcc-and-dnn",
            paperLink: "https://www.ijert.org/research/proposed-model-of-speech-recognition-using-mfcc-and-dnn-IJERTV9IS050421.pdf",
            keyPoints: [
                "Proposed a speech-to-text system that combines pre-processing (using Polygon Smoothing Algorithm), feature extraction (using MFCC), and classification (using Deep Neural Networks), aiming to enhance recognition accuracy especially for large datasets.",
                "The Mel Frequency Cepstral Coefficients (MFCC) technique is employed to capture key speech features such as pitch and power, making it well-suited for modeling human auditory perception in speech recognition tasks.",
                "A comparative study demonstrates that while SVM is effective for smaller datasets, DNNs provide superior accuracy and scalability for large-scale speech recognition due to their deep learning capabilities and universal approximation properties.",
                "The model holds promise for voice-based applications in multilingual systems, biometric authentication, assistive technologies for disabled individuals, voice-controlled games, and military-grade speech recognition systems."
            ],
            className: "mb-6 lg:ps-8"
        }
    ];

    return (
        <div className="px-8 py-6" style={{ fontFamily: "Georgia" }}>
            <h2 className="text-2xl font-bold mb-4 text-[#fed9bc]">Research & Publications</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 text-[#fed9bc]">
                {publications.map((publication, index) => (
                    <PublicationCard key={index} publication={publication} />
                ))}
            </div>
        </div>
    );
}

export default Research;
