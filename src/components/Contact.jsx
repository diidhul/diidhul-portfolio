import React from 'react'

const Contact = () => {
    return (
        <section className='px-4 py-10 sm:py-16 md:py-20 sm:px-8 md:px-16 lg:px-36'>
            <div className='inline-block p-4 transition-all duration-500 border-2 border-dashed rounded-lg sm:p-6 md:p-8 animate-softBounce hover:animate-none hover:translate-y-0 border-darkNavyBlue'>
                <div className='p-4 border-2 rounded-lg sm:p-6 md:p-8 border-darkNavyBlue'>
                    <h2 className='py-2 text-xl font-semibold sm:text-2xl md:text-3xl text-darkNavyBlue'>Contact</h2>
                    <div>
                        <p className="text-sm sm:text-base md:text-lg">I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Have a project in mind? Let's connect.</p>
                        <div className='mt-4'>
                            <ul className="space-y-3">
                                <li>
                                    <a href="mailto: https://alfadhilibnufikri.com" target='_blank' className='flex flex-row items-center hover:underline '>
                                        <img className='w-4 h-4 mr-2' src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000" alt="Email Icon" />
                                        alfadhilibnufikri.com
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/diidhul" target='_blank' className='flex flex-row items-center hover:underline'>
                                        <img className='w-4 h-4 mr-2' src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="GitHub Icon" />
                                        github.com/diidhul
                                    </a>
                                </li>
                                <li>
                                    <a href='https://linkedin.com/in/alfadhil' target='_blank' className='flex flex-row items-center hover:underline'>
                                        <img className='w-4 h-4 mr-2' src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="LinkedIn Icon" />
                                        linkedin.com/in/alfadhil
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact
