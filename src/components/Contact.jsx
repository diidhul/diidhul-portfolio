import React from 'react'

const Contact = () => {
    return (
        <section className='py-20'>
            <div className='inline-block p-2 transition-all duration-500 border-2 border-dashed rounded-lg animate-softBounce hover:animate-none hover:translate-y-0 mx-36 border-darkNavyBlue'>
                <div className='p-6 border-2 rounded-lg border-darkNavyBlue'>
                    <h2 className='py-2 text-2xl font-semibold text-darkNavyBlue'>Contact</h2>
                    <div>
                        <p>I'm currently looking to join a cross-functional team that values improving people's lives
                            through accessible design. or have a project in mind? Let's connect.</p>
                        <div>
                            <br />
                            <ul>
                                <a href="mailto: https://alfadhilibnufikri.com" target='_blank' className='flex flex-row items-center hover:underline'> <img className='w-4 h-4' src="https://img.icons8.com/?size=100&id=53388&format=png&color=000000" alt="" /> alfadhilibnufikri.com</a>
                                <a href="https://github.com/diidhul" target='_blank' className='flex flex-row items-center hover:underline'> <img className='w-4 h-4' src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000" alt="" /> github.com/diidhul</a>
                                <a href='https://linkedin.com/in/alfadhil' target='_blank' className='flex flex-row items-center hover:underline'> <img className='w-4 h-4' src="https://img.icons8.com/?size=100&id=447&format=png&color=000000" alt="" /> linkedin.com/diidhul</a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Contact
