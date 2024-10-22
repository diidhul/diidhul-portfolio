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
        <section className="pt-16 mt-1">
            <div className="container px-8 mx-auto md:px-16 lg:px-24">
                <h2 className="justify-center mb-12 text-4xl font-semibold text-center text-darkNavyBlue">Work Experience</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {poinPengalaman.map((poin) => (
                        <div key={poin.id} className="p-1 transition-transform duration-500 border-2 border-dashed rounded-lg border-darkNavyBlue hover:-translate-y-2">
                            {/* Inner Card with Shadow and Border */}
                            <div className="flex flex-row items-center gap-4 px-6 py-4 border rounded-lg shadow-lg border-darkNavyBlue">
                                <img src={poin.image} alt={poin.title} className="w-16 h-16" />
                                <div className="flex flex-col justify-between pl-4 pr-2">
                                    <h1 className="mb-2 text-2xl font-bold text-darkNavyBlue">{poin.title}</h1>
                                    <p className="mb-4 text-lg text-gray-700">{poin.content}</p>
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
