import React from 'react';

export default function Modal({ toggleModal, isOpen }) {
    if (!isOpen) return null; // Tidak render modal jika tidak terbuka

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 modal-overlay">
            <div className={`relative z-50 p-6 transition-transform duration-500 ease-out transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white rounded shadow-lg`}>

                <div className="flex justify-end mb-2"> {/*👈untuk ngarahin button jadi di sebelah kanan*/}
                    <button className='transition-all duration-300 close-modal hover:scale-110 hover:font-bold' onClick={toggleModal}>
                        Close
                    </button>
                </div>

                <div className='flex justify-center py-2'>
                    <div className='w-[300px] text-center'>
                        <h2 className='text-lg font-semibold'>
                            Get the latest updates by knowing more about this site
                        </h2>
                    </div>
                </div>

                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-darkNavyBlue hover:bg-mediumPinkishBeige"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div >
    );
}
