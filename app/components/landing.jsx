import Image from 'next/image';
import SkillButton from './skillButton';
import { skills } from '../data/skills';

const PROFILE_IMAGE = {
    src: "https://media.licdn.com/dms/image/v2/D4E03AQHFdYjW4O2XIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731003250675?e=1751500800&v=beta&t=RA7of28EQvObskW6rtYMo8VoK7DbNebEbNBLv4M6QU8",
    alt: "Shohaib Mallick",
    width: 180,
    height: 180
};

const SOCIAL_LINKS = [
    {
        href: "https://res.cloudinary.com/dbqwc4btc/image/upload/v1747955504/Shohaib_Mallick_Resume.pdf",
        label: "Resume",
        bgColor: "bg-black",
        hoverBgColor: "hover:bg-black/95",
        shadowColor: "shadow-black/30"
    },
    {
        href: "https://www.linkedin.com/in/shohaibmk/",
        label: "LinkedIn",
        bgColor: "bg-[#0a66c2]",
        hoverBgColor: "hover:bg-[#0a66c2]/95",
        shadowColor: "shadow-[#0a66c2]/30"
    },
    {
        href: "https://github.com/shohaibmk",
        label: "GitHub",
        bgColor: "bg-[#08872B]",
        hoverBgColor: "hover:bg-[#08872B]/95",
        shadowColor: "shadow-[#08872B]/30"
    }
];

const OnlineIndicator = () => (
    <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
);

const ProfileImage = () => (
    <div className="mb-4 md:mb-8">
        <Image
            {...PROFILE_IMAGE}
            className="rounded-full w-32 h-32 md:w-48 md:h-48 border-1 border-gray-300 shadow-lg shadow-gray-500/50"
            priority
        />
    </div>
);

const SocialLink = ({ href, label, bgColor, hoverBgColor, shadowColor }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full sm:w-auto text-center ${bgColor} text-[#fed9bc] px-4 py-2 rounded-md ${hoverBgColor} hover:shadow-lg ${shadowColor} transition duration-300`}
    >
        {label}
    </a>
);

const ProfileInfo = () => (
    <div className="max-w-2xl lg:mx-32">
        <div id="name" className="space-y-1 md:space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold flex flex-row items-center gap-2 text-[#fed9bc]" style={{ fontFamily: 'Georgia' }}>
                <span>Hey, I'm Shohaib Mallick</span>
                <OnlineIndicator />
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#fed9bc]/90" style={{ fontFamily: "Georgia" }}>Fullstack Software Engineer</h2>
            <h3 className="text-sm md:text-lg text-[#fed9bc]/80" style={{ fontFamily: "Georgia" }}>Building Scalable, Reliable Systems</h3>
        </div>
        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 text-[#fed9bc]">
            {SOCIAL_LINKS.map((link, index) => (
                <SocialLink key={index} {...link} />
            ))}
        </div>
    </div>
);

const SkillsSection = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-2 md:gap-4" style={{ fontFamily: "Georgia" }}>
        {skills.map((skill) => (
            <SkillButton key={skill} name={skill} />
        ))}
    </div>
);

const Landing = () => {
    return (
        <div className="px-8 ">
            <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-10 gap-8">
                <ProfileImage />
                <ProfileInfo />
            </div>
            <SkillsSection />
        </div>
    );
};

export default Landing;
