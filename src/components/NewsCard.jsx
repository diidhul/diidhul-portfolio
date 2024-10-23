import React from 'react'
import PropTypes from 'prop-types' //import proptypes untuk 

const NewsCard = ({ item }) => {

    // function untuk ganti tanggal sesuai dengan format biasanya
    const formatDate = (date) => { //menerima date sebagai parameter, lalu di rubah ke format yang diinginkan
        const options = { year: 'numeric', month: 'long', day: 'numeric' }; //formatnya kaya gini
        return new Date(date).toLocaleDateString('id-ID', options);
    }

    return (
        <div className='flex flex-col gap-y-2'>
            <div className='p-4 transition-transform duration-500 hover:-translate-y-2'>
                {/* Thumbnail dengan ukuran responsif */}
                <img className='w-full rounded-lg sm:w-40' src={item?.thumbnail} alt="Thumbnail" />
                <br />
                {/* Kontainer untuk title dan date dengan padding responsif */}
                <div className='flex flex-col pb-2 sm:flex-row sm:justify-between'>
                    <h3 className='text-lg font-semibold sm:text-base'>
                        <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                            {item?.title}
                        </a>
                    </h3>
                    <p className='mt-1 text-xs text-gray-500 sm:mt-0' id='date'>{formatDate(item?.pubDate)}</p>
                </div>

                {/* Deskripsi yang responsif */}
                <p className='text-sm text-gray-700'>{item?.description}</p>
                <br />

                {/* Tombol Read More */}
                <div className='flex justify-end'>
                    <button className='p-2 transition-colors duration-300 border-2 rounded-md border-darkNavyBlue bg-mediumPinkishBeige hover:bg-darkNavyBlue hover:text-offWhite'>
                        <a href={item?.link} target='_blank' rel='noopener noreferrer'>
                            Read More
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

NewsCard.PropTypes = {
    item: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default NewsCard
