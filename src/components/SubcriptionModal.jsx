import React, { useState } from 'react';

const SubscriptionModal = () => {
    const [isOpen, setIsOpen] = useState(true); // Set isOpen to true to show modal initially

    return (
        <>
            {/* Background overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
            )}

            {/* Modal Window */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="relative w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                        {/* Close button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute text-gray-500 top-2 right-2 hover:text-gray-700"
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <div className="text-center">
                            <h2 className="mb-4 text-2xl font-semibold">Subscribe</h2>
                            <p className="mb-6 text-gray-600">Subscribe to get the latest fashion trends and deals.</p>

                            {/* Form */}
                            <form
                                action=""
                                method="post"
                                className="space-y-4"
                                target="_blank"
                                noValidate
                            >
                                {/* Name Input */}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="FNAME"
                                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your name"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-1">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="EMAIL"
                                        className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your email address"
                                        required
                                    />
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 text-white transition-colors duration-300 bg-blue-500 rounded-md hover:bg-blue-700"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SubscriptionModal;
