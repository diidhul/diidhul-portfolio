import React from 'react'

const Navbar = () => {
    return (
        <nav className="px-8 border-b-2 text-darkNavyBlue bg-offWhite md:px-16 lg:px-24 border-darkNavyBlue">
            <div className='container flex justify-center py-2 md:justify-between item-center'>
                <a className='hidden p-1 text-2xl font-bold md:inline'>diidhul</a>
                <div className='p-2 space-x-6 font-medium'>
                    <a href="#home" className="transition-colors duration-300 text-darkNavyBlue hover:text-black">Home</a>
                    <a href="#about" className="transition-colors duration-300 text-darkNavyBlue hover:text-black">About Me</a>
                    <a href="#News" className="transition-colors duration-300 text-darkNavyBlue hover:text-black">Newsletter</a>
                </div>
                <button className='border-2 p-2 border-darkNavyBlue rounded-md bg-#243763 bg-mediumPinkishBeige bg-blend-darken hover transition-colors duration-300 hover:bg-darkNavyBlue hover:text-offWhite' >Connect Me</button>
            </div>
        </nav>
    )
}

export default Navbar
