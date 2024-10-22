import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const Navbar = () => {
    return (
        <nav className="px-8 border-b-2 text-darkNavyBlue bg-offWhite md:px-16 lg:px-24 border-darkNavyBlue">
            <div className='container flex justify-center py-2 md:justify-between item-center'>
                <Link to="/" className='hidden p-1 text-2xl font-bold md:inline'>diidhul<span className='text-aquaBlue'>..</span></Link>
                <div className='p-2 space-x-6 font-medium'>
                    <Link to="/" className="text-darkNavyBlue hover:underline">Home</Link>
                    <Link to="/aboutMe" className="text-darkNavyBlue hover:underline">About Me</Link>
                    <Link to="/newsletter" className="text-darkNavyBlue hover:underline">Newsletter</Link> {/* Update ini untuk routing ke Newsletter */}
                </div>
                <button className='border-2 p-2 border-darkNavyBlue rounded-md bg-#243763 bg-mediumPinkishBeige bg-blend-darken hover transition-colors duration-300 hover:bg-darkNavyBlue hover:text-offWhite'>Connect Me</button>
            </div>
        </nav>
    );
};

export default Navbar;
