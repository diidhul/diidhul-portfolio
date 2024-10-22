import React from 'react';
import NewsCard from '../components/newsCard';

// api 👉 https://api-berita-indonesia.vercel.app/cnn/teknologi/

const Newsletter = () => {
    return (
        <section className='container px-8 pb-20 mx-auto md:px-16 lg:px-24'>
            <h1 className='px-24 py-8 text-3xl'>Tech News</h1>
            <br />
            <div className='grid grid-cols-2 gap-2 px-4'> {/* Gap untuk jarak antar kolom */}
                {/* banjar pertama */}
                <div className="mx-2 space-y-4 "> {/* space-y-8 untuk jarak antar card secara vertikal */}
                    <div className='p-2 border-2 border-dashed rounded-lg border-darkNavyBlue'>
                        <div className='p-4 border-2 rounded-lg border-darkNavyBlue'>
                            <NewsCard />
                        </div>
                    </div>
                    <div className='p-2 border-2 border-dashed rounded-lg border-darkNavyBlue'>
                        <div className='p-4 border-2 rounded-lg border-darkNavyBlue'>
                            <NewsCard />
                        </div>
                    </div>
                </div>

                {/* banjar kedua  */}
                <div className="mx-2 space-y-4 "> {/* space-y-8 untuk jarak antar card secara vertikal */}
                    <div className='p-2 border-2 border-dashed rounded-lg border-darkNavyBlue'>
                        <div className='p-4 border-2 rounded-lg border-darkNavyBlue'>
                            <NewsCard />
                        </div>
                    </div>
                    <div className='p-2 border-2 border-dashed rounded-lg border-darkNavyBlue'>
                        <div className='p-4 border-2 rounded-lg border-darkNavyBlue'>
                            <NewsCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter;
