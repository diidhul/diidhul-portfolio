import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Impor Modal

const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Untuk modal
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Untuk dropdown mobile

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <nav className="px-4 border-b-2 sm:px-6 md:px-16 lg:px-24 text-darkNavyBlue bg-offWhite border-darkNavyBlue">
                <div className='container flex flex-wrap items-center justify-between py-2'>
                    {/* Logo hanya tampil di tablet ke atas */}
                    <Link to="/" className='hidden p-1 text-2xl font-bold transition-transform duration-300 md:inline hover:scale-110'>
                        diidhul<span className='text-aquaBlue'>..</span>
                    </Link>

                    {/* Tombol Hamburger untuk mobile */}
                    <div className="block md:hidden">
                        <button onClick={toggleDropdown} className="p-2 text-darkNavyBlue">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </button>
                    </div>

                    {/* Link Navigasi - disembunyikan di mobile */}
                    <div className="hidden space-x-6 font-medium md:flex ">
                        <Link to="/" className="text-darkNavyBlue underline-from-right">Home</Link>
                        <Link to="/about" className="text-darkNavyBlue underline-from-right">About Me</Link>
                        <Link to="/newsletter" className="text-darkNavyBlue underline-from-right">Newsletter</Link>
                    </div>

                    {/* Tombol "Connect Me" */}
                    <button
                        id='subscriptionModal'
                        onClick={toggleModal}
                        className='p-2 transition-colors duration-300 border-2 rounded-md border-darkNavyBlue bg-mediumPinkishBeige hover:bg-darkNavyBlue hover:text-offWhite'
                    >
                        Connect Me
                    </button>
                </div>

                {/* Menu dropdown untuk mobile */}
                <div className={isDropdownOpen ? "block" : "hidden"} id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 text-base font-medium rounded-md text-darkNavyBlue hover:underline">Home</Link>
                        <Link to="/aboutMe" className="block px-3 py-2 text-base font-medium rounded-md text-darkNavyBlue hover:underline">About Me</Link>
                        <Link to="/newsletter" className="block px-3 py-2 text-base font-medium rounded-md text-darkNavyBlue hover:underline">Newsletter</Link>
                    </div>
                </div>
            </nav>

            {/* Modal berada di luar navbar dan menutupi layar */}
            <Modal toggleModal={toggleModal} isOpen={isModalOpen} />
        </>
    );
};

export default Navbar;
