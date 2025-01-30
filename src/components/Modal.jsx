import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ toggleModal, isOpen }) {
    const [email, setEmail] = useState(''); // State untuk menyimpan email
    const [showThankYou, setShowThankYou] = useState(false); // State untuk pesan terima kasih

    if (!isOpen) return null; // kalo modal ga di k=click atau =!isOpen maka jangan render modalnya

    const handleSubscribe = async (e) => {
        e.preventDefault(); //ini buat ngentikan browser secara default ngirim form ke halaman /submit, karena kita bakalan ngirim ke api submit

        try {
            // kirim email ke server pake fetch
            const response = await fetch('https://diidhul.com/api/subscribe', { //belom buat alamat apinya
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {                                  //kalo server kasih response ok maka 👇
                console.log("Email berhasil dikirim:", email);  //print email berhasil di kirim di console
                setShowThankYou(true);                          //tampilkan pesan terima kasih
                setTimeout(() => {
                    setShowThankYou(false);                     // ilangin pesan selama beberapa detik
                    toggleModal();                              // Tutup modal
                }, 3000);                                       // Ubah sesuai kebutuhan (3000ms = 3 detik)
            } else {
                console.error("Gagal mengirim email:", response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    handleSubscribe.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggleModal: PropTypes.func.isRequired
    };

    Modal.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        toggleModal: PropTypes.func.isRequired
    };


    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 modal-overlay">
            <div className={`relative z-50 p-6 transition-transform duration-500 ease-out transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} bg-white rounded shadow-lg`}>

                <div className="flex justify-end mb-2">
                    <button className='transition-all duration-300 close-modal hover:scale-110 hover:font-bold' onClick={toggleModal}>
                        Close
                    </button>
                </div>

                {showThankYou ? (
                    <div className="font-semibold text-center text-green-600">Terima Kasih telah Subscribe!</div>
                ) : (
                    <>
                        <div className='flex justify-center py-2'>
                            <div className='w-[300px] text-center'>
                                <h2 className='text-lg font-semibold'>
                                    Get the latest updates by knowing more about this site
                                </h2>
                            </div>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email} // Bind state email ke input
                                onChange={(e) => setEmail(e.target.value)} // Update state email
                                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                id='subscribe'
                                type="submit"
                                className="px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-darkNavyBlue hover:bg-mediumPinkishBeige"
                            >
                                Subscribe
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
