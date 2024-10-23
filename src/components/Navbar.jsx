import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Impor Modal

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <nav className="px-8 border-b-2 text-darkNavyBlue bg-offWhite md:px-16 lg:px-24 border-darkNavyBlue">
                <div className='container flex justify-center py-2 md:justify-between item-center'>
                    <Link to="/" className='hidden p-1 text-2xl font-bold md:inline'>diidhul<span className='text-aquaBlue'>..</span></Link>
                    <div className='p-2 space-x-6 font-medium'>
                        <Link to="/" className="text-darkNavyBlue hover:underline">Home</Link>
                        <Link to="/aboutMe" className="text-darkNavyBlue hover:underline">About Me</Link>
                        <Link to="/newsletter" className="text-darkNavyBlue hover:underline">Newsletter</Link>
                    </div>
                    <button
                        id='subscriptionModal'
                        onClick={toggleModal}
                        className='p-2 transition-colors duration-300 border-2 rounded-md border-darkNavyBlue bg-mediumPinkishBeige bg-blend-darken hover hover:bg-darkNavyBlue hover:text-offWhite'
                    >
                        Connect Me
                    </button>
                </div>
            </nav>

            {/* Modal berada di luar navbar dan menutupi layar */}
            <Modal toggleModal={toggleModal} isOpen={isModalOpen} />
        </>
    );
};

export default Navbar;
