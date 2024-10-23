import React from 'react';

const poinPengalaman = [
    {
        id: 1,
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
        title: "Wordpress Developer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae."
    },
    {
        id: 2,
        image: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
        title: "Frontend Engineer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae."
    },
    {
        id: 3,
        image: "https://img.icons8.com/?size=100&id=WoNypriVqIG7&format=png&color=000000",
        title: "IT Support",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae."
    },
    {
        id: 4,
        image: "https://img.icons8.com/?size=100&id=VXQrhy9fWtm1&format=png&color=000000",
        title: "Frontend Engineer",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quae."
    }
];

const Pengalaman = () => {
    return (
        <section className="pt-10 mt-1">
            <div className="container px-4 mx-auto sm:px-6 md:px-16 lg:px-24">
                <h2 className="mb-8 text-2xl font-semibold text-center sm:text-3xl md:text-4xl text-darkNavyBlue">Work Experience</h2>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {poinPengalaman.map((poin) => (
                        <div key={poin.id} className="p-1 transition-transform duration-500 border-2 border-dashed rounded-lg border-darkNavyBlue hover:-translate-y-2">
                            {/* Inner Card with Shadow and Border */}
                            <div className="flex flex-col items-center gap-4 px-4 py-4 border rounded-lg shadow-lg sm:flex-row sm:px-6 border-darkNavyBlue">
                                <img src={poin.image} alt={poin.title} className="w-16 h-16 sm:w-20 sm:h-20" />
                                <div className="flex flex-col justify-between pl-4 pr-2">
                                    <h1 className="mb-2 text-lg font-bold sm:text-xl md:text-2xl text-darkNavyBlue">{poin.title}</h1>
                                    <p className="mb-4 text-sm text-gray-700 sm:text-base md:text-lg">{poin.content}</p>
                                    <div className="flex items-center justify-between">
                                        <span></span> {/* Placeholder untuk mengisi ruang */}
                                        <a href="#" className="transition duration-300 text-aquaBlue hover:underline hover:text-darkNavyBlue">Read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pengalaman;
