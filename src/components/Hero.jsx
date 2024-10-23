import React from 'react';
import ppimage from '/pp.svg';

const Hero = () => {
    return (
        <section className="container px-4 pb-20 mx-auto sm:px-6 md:px-16 lg:px-2">
            {/* Hero Section */}
            <div className="flex flex-col-reverse items-center px-4 pt-20 md:flex-row gap-y-8 md:gap-x-8 sm:px-6 md:px-36">
                <img
                    className="w-full h-auto max-w-xs transition-transform duration-300 transform md:basis-1/3 hover:scale-110"
                    src={ppimage}
                    alt="Hero Image of Fadhil"
                />
                <div className="text-center md:basis-2/3 md:text-left">
                    <h1 className="text-3xl font-semibold transition-all duration-300 sm:text-4xl md:text-5xl text-darkNavyBlue hover:tracking-widest hover:text-mediumPinkishBeige">
                        Hi<span className="inline-block font-mono animate-wave">👋</span> Aku Fadhil, berusaha menjadi frontend engineer
                    </h1>
                    <button
                        className="px-4 py-2 mt-6 text-white duration-300 border-2 border-dotted rounded-lg border-lightGray bg-darkNavyBlue hover:bg-mediumPinkishBeige hover:text-darkNavyBlue hover:font-bold hover:scale-110"
                        onClick={() => window.open('https://drive.google.com/uc?export=download&id=105kXPcLXfVPpXY8_MNiA9om0yRwrS6UT', '_blank')}
                    >
                        Download CV
                    </button>
                </div>
            </div>

            {/* Intro */}
            <div className="flex flex-col gap-2 px-4 mt-10 sm:px-6 md:px-36">
                <h2 className="relative w-[max-content] font-mono text-3xl sm:text-4xl before:absolute before:inset-0 before:animate-typewriter before:bg-offWhite after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-darkNavyBlue">
                    Website apa ini ?
                </h2>
                <br />
                <p className="text-base font-normal sm:text-lg text-darkNavyBlue">
                    Biar kalian semua pada kenal ama ane :)
                </p>
            </div>

            {/* Section Desc */}
            <div className="w-full md:w-[992px] h-auto flex flex-col gap-2 mt-2 px-4 sm:px-6 md:px-36">
                <p className="text-sm font-normal sm:text-base text-darkNavyBlue">
                    Lulusan teknik komputer dengan sedikit keilmuan di bidang
                    <span className="font-semibold text-aquaBlue"> engineering</span>, berusaha belajar pemrograman secara mandiri dengan mengimplementasikan keahlian dan keterampilan yang diperoleh selama perkuliahan.
                </p>
            </div>
        </section>
    );
};

export default Hero;
