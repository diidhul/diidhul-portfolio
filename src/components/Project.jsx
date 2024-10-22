import React, { useEffect, useState } from 'react';

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
    const [beforeHighlight, setBeforeHighlight] = useState([]);
    const [highlightedLetters, setHighlightedLetters] = useState([]);
    const [afterHighlight, setAfterHighlight] = useState([]);

    useEffect(() => {
        const h3 = "Im  currently looking to join a team that values";
        const text = " cross-functional";
        const h3End = " improving people's lives through accessible design.";

        const h3Array = h3.split('');
        const textArray = text.split('');
        const h3EndArray = h3End.split('');

        setBeforeHighlight(h3Array);
        setHighlightedLetters(textArray);
        setAfterHighlight(h3EndArray);
    }, []);

    return (
        <section className="flex flex-col items-center justify-center pb-16 pt-36">
            <div className="mb-8 text-center">
                <h3 className="text-base font-semibold pl-60 pr-60">
                    {/* Teks sebelum highlight */}
                    {beforeHighlight.map((letter, index) => (
                        <span key={index} className="inline-block transition-transform duration-300 hover:translate-y-2">
                            {letter}
                        </span>
                    ))}

                    {/* Teks yang di-highlight */}
                    <span className="text-indigo-500 duration-300 hover:scale-110 transform-transition">
                        {highlightedLetters.map((letter, index) => (
                            <span key={index} className="inline-block transition-transform duration-300 hover:translate-y-2">
                                {letter}
                            </span>
                        ))}
                    </span>

                    {/* Teks setelah highlight */}
                    {afterHighlight.map((letter, index) => (
                        <span key={index} className="inline-block transition-transform duration-300 hover:translate-y-2">
                            {letter}
                        </span>
                    ))}
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
