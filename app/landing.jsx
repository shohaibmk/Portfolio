import Image from 'next/image';
import SkillButton from './components/SkillButton';
import { skills } from './data/skills';

// Landing component
const Landing = () => {
    return (
        <div className="px-4">
            <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-10 gap-8">
                <div className="mb-4 md:mb-8">
                    <Image
                        src="https://media.licdn.com/dms/image/v2/D4E03AQHFdYjW4O2XIw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731003250675?e=1751500800&v=beta&t=RA7of28EQvObskW6rtYMo8VoK7DbNebEbNBLv4M6QU8"
                        alt="Shohaib Mallick"
                        width={180}
                        height={180}
                        className="rounded-full w-32 h-32 md:w-48 md:h-48"
                        priority
                    />
                </div>

                <div className="max-w-2xl mx-auto">
                    <div id="name" className="space-y-1 md:space-y-2">
                        <h1 className="text-3xl md:text-4xl font-bold flex flex-row md:flex-row items-center gap-2">
                            <span>Hi, I'm Shohaib Mallick</span>
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                        </h1>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-700">Fullstack Software Engineer</h2>
                        <h3 className="text-sm md:text-lg text-gray-500">Building Scalable, Reliable Systems</h3>
                    </div>
                    <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2">
                        <a
                            href="https://res.cloudinary.com/dbqwc4btc/image/upload/v1745868259/Shohaib_Mallick_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                        >
                            View Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shohaibmk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300"
                        >
                            View LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap items-center justify-center gap-2 md:gap-4 p-4">
                {skills.map((skill) => (
                    <SkillButton key={skill} name={skill} />
                ))}
            </div>
        </div>
    );
}

export default Landing;
