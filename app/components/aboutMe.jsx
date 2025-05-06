import React from 'react';
import { ABOUT_PARAGRAPHS } from '../data/about';

const STYLES = {
    container: {
        base: "px-8 py-6",
        font: { fontFamily: "Georgia" }
    },
    heading: "text-2xl font-bold mb-4 text-[#fed9bc]",
    paragraph: {
        base: "text-justify text-[#ece3dc] mb-4 last:mb-0",
        font: { fontFamily: "Georgia" }
    }
};

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
const Paragraph = ({ children }) => (
    <p
        className={STYLES.paragraph.base}
        style={STYLES.paragraph.font}
    >
        {children}
    </p>
);

/**
 * About Me section component displaying professional background and skills
 * @returns {JSX.Element}
 */
const AboutMe = () => (
    <div
        className={STYLES.container.base}
        style={STYLES.container.font}
    >
        <h2 className={STYLES.heading}>About Me</h2>
        {ABOUT_PARAGRAPHS.map((content, index) => (
            <Paragraph key={index}>{content}</Paragraph>
        ))}
    </div>
);

export default AboutMe;
