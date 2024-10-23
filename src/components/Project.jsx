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

            {/* Carousel Skill Icons */}
            <SkillCarousel />

            {/* Gambar project */}
            <div className='flex items-center justify-center mt-8'>
                <img src="src/assets/projectIcon.svg" alt="Project Icon" className='w-full max-w-xs md:max-w-xl' />
            </div>
        </section>
    );
};


const SkillCarousel = () => {

    // Setting untuk carousel menggunakan slick-carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Jumlah ikon yang ditampilkan di handphone
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 640, // Batas untuk handphone
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Batas untuk tablet
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024, // Batas untuk desktop
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="w-full mt-8">
            <Slider {...settings}>
                {skillIcons.map((skill) => (
                    <div key={skill.id} className="flex flex-col items-center">
                        <div className="flex items-center justify-center p-2 border-solid rounded-full sm:border-2 sm:border-darkNavyBlue">
                            <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Project;
