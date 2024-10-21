import React from 'react';

const skillIcons = [
    {
        id: 1,
        name: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
        id: 2,
        name: "CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
        id: 3,
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id: 4,
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
        id: 5,
        name: "Tailwind",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        id: 6,
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
        id: 7,
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
        id: 8,
        name: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    }
];

const Project = () => {
    return (
        <section className="flex flex-col items-center justify-center pb-16 pt-36">
            <div className="mb-8 text-center">
                <h3 className="text-base font-semibold pl-60 pr-60">
                    I'm currently looking to join a <span className="text-indigo-500 duration-300 hover:scale-110 transform-transition hover">cross-functional</span> team
                    that values improving people's lives through accessible design
                </h3>
            </div>

            {/* baris pertama */}
            <div className="flex justify-center gap-6 mt-8">
                {skillIcons.slice(0, 5).map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center duration-300 hover:scale-110 transform-transition">
                        <div className="flex items-center justify-center p-2 border-2 border-solid rounded-full border-darkNavyBlue">
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>

            {/* baris kedua */}
            <div className="flex justify-center gap-6 mt-8">
                {skillIcons.slice(5).map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center duration-300 hover:scale-110 transform-transition">
                        <div className="flex items-center justify-center p-2 border-2 border-solid rounded-full border-darkNavyBlue">
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex items-center justify-center'>
                <img src="src\assets\projectIcon.svg" alt="" className='max-w-xl' />
            </div>

        </section>
    );
};

export default Project;
