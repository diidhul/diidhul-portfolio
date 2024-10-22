import React from 'react';
import ppimage from '/pp.svg';

const Hero = () => {
    return (
        <section className="container px-8 pb-20 mx-auto md:px-16 lg:px-2">
            {/* Hero Section */}
            <div className="flex flex-row items-center pt-20 px-36 gap-x-8">
                <img
                    className="w-auto h-auto max-w-xs transition-transform duration-300 transform basis-1/3 hover:scale-110"
                    src={ppimage}
                    alt="Hero Image of Fadhil"
                />
                <div className="basis-2/3">
                    <h1 className='text-5xl font-semibold transition-all duration-300 text-darkNavyBlue hover:tracking-widest hover:text-mediumPinkishBeige'>
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
            <div className="flex flex-col gap-2 mt-20 px-36">
                <h2 className="text-4xl font-medium text-darkNavyBlue">Website apa ini?</h2>
                <p className="text-lg font-normal text-darkNavyBlue">Biar kalian semua pada kenal ama ane :)</p>
            </div>

            {/* Sekction Desc */}
            <div className="w-[992px] h-[120px] flex flex-col gap-2 mt-2 px-36">
                <p className="text-base font-normal text-darkNavyBlue">
                    Lulusan teknik komputer dengan sedikit keilmuan di bidang
                    <span className="font-semibold text-aquaBlue"> engineering</span>, berusaha belajar pemrograman secara mandiri dengan mengimplementasikan keahlian dan keterampilan yang diperoleh selama perkuliahan.
                </p>
            </div>

        </section >
    );
};

export default Hero;
