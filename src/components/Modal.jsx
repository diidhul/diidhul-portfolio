import React from 'react';

export default function Modal({ toggleModal, isOpen }) {

    if (!isOpen) return null; // Tidak render modal jika tidak terbuka

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30 modal-overlay">
            <div className="absolute inset-0 backdrop-blur-sm"></div> {/* Blur hanya di background */}
            <div className="relative z-50 p-8 transition ease-in-out delay-150 bg-white rounded shadow-lg hover:-translate-y-1 modal-content">
                <h2>Hello World</h2>
                <button className='absolute close-modal top-2 right-2' onClick={toggleModal}>
                    Close
                </button>
            </div>
        </div>
    );
}
