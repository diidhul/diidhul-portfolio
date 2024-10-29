import React, { useEffect, useState } from 'react';
import axios from 'axios'; //library untuk HTTP request
import Slider from "react-slick"; // Impor Slider dari react-slick
import "slick-carousel/slick/slick.css"; // Slick Carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Slick Carousel Theme CSS

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
        const h3 = "I'm  currently looking to join a team that values";
        const text = " cross-functional";
        const h3End = " improving people's lives through accessible design.";

        setBeforeHighlight(h3.split(''));
        setHighlightedLetters(text.split(''));
        setAfterHighlight(h3End.split(''));
    }, []);

    return (
        <section className="flex flex-col items-center justify-center px-4 pb-16 pt-36 sm:px-8 md:px-16">
            <div className="mb-8 text-center">
                <h3 className="text-sm font-semibold sm:text-lg md:text-lg">
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

            {/* Carousel or Grid based on screen size */}
            <SkillIcons />

            {/* Gambar project */}
            <div className='flex items-center justify-center mt-8'>
                <img src="src/assets/projectIcon.svg" alt="Project Icon" className='w-full max-w-xs md:max-w-xl' />
            </div>
        </section>
    );
};

const SkillIcons = () => {
    // Check if screen width is less than 640px (mobile view)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
        };

        return (
            <div className="w-full mt-8">
                <Slider {...settings}>
                    {skillIcons.map((skill) => (
                        <div key={skill.id} className="flex flex-col items-center">
                            <div className="flex items-center justify-center p-2 rounded-full border-darkNavyBlue">
                                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    } else {
        return (
            <div className="grid gap-6 mt-8 lg:grid-cols-5 lg:grid-rows-2 lg:gap-y-4 lg:place-items-center ">
                {/* Baris pertama: 5 item */}
                {skillIcons.slice(0, 5).map((skill) => (
                    <div key={skill.id} className="flex items-center justify-center w-16 h-16 p-2 duration-300 border-2 rounded-full border-darkNavyBlue hover:scale-110 transform-transition">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    </div>
                ))}

                {/* Kolom kosong untuk menyelaraskan baris kedua */}
                <div className="hidden lg:block"></div> {/* buat sebelah kanan biar icon ada di tengah */}
                {skillIcons.slice(5).map((skill) => (
                    <div key={skill.id} className="flex items-center justify-center w-16 h-16 p-2 duration-300 border-2 rounded-full border-darkNavyBlue hover:scale-110 transform-transition">
                        <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                    </div>
                ))}
                <div className="hidden lg:block"></div> {/* Kolom kosong kanan */}
            </div>

        );
    }
};

export default Project;
