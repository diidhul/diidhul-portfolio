import React from 'react';
import Contact from '../components/Contact';

const AboutMe = () => {
    return (
        <div className="px-4 text-lg font-normal text-justify sm:px-8 md:px-26 lg:px-48">
            <br />

            <p style={{ textIndent: '1.5rem', marginBottom: '1rem' }}>
                <span className="text-red-400">Hello! </span> I'm Alfadhil, a dedicated IT professional and aspiring Frontend Engineer with a strong background in web development and support.
                I graduated from Universitas Syiah Kuala in Banda Aceh, where I built a foundation in computer science and developed a deep interest in web technology.
            </p>

            <p style={{ textIndent: '1.5rem', marginBottom: '1rem' }}>
                My career journey began with an internship at Padebooks, a local publishing company in Aceh, where I had the opportunity to contribute to digital projects and gain initial hands-on experience in the tech field.
                After graduation, I joined Kasyapi Akbar Nusantara as a Web Developer. There, I enhanced my skills in HTML, CSS, and JavaScript, working closely with a team to bring complex web projects to life.
            </p>

            <p style={{ textIndent: '1.5rem', marginBottom: '1rem' }}>
                Currently, I am working at PT. POS Indonesia as an IT Support professional, where I handle a variety of technical issues and ensure smooth operations for our team. Alongside my main role,
                I continue to advance my web development skills through freelance projects. This has allowed me to build my own products, including TesUjianOnline.com, an online testing platform, and Mugee.id, a project aimed at connecting local communities.
                These experiences have deepened my expertise in responsive design, user experience, and scalability.
            </p>

            <p style={{ textIndent: '1.5rem' }}>
                My goal is to continuously grow as a web developer and bring impactful digital experiences to life, both through my main work and side projects.
            </p>
            <Contact />
        </div>
    );
};

export default AboutMe;
