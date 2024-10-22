import React from 'react'
import PropTypes from 'prop-types' //import proptypes untuk 

const NewsCard = ({ item }) => {

    // function untuk ganti tanggal sesuai dengan format biasanya
    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleDateString('id-ID', options);
    }

    return (
        <div className='flex flex-col gap-y-2 '>
            <div className='p-4 transition-transform duration-500 hover:-translate-y-2'>
                <img className='w-40 rounded-lg ' src={item?.thumbnail} alt="Thumbnail" />
                <br />
                <div className='container flex justify-between pb-2'>
                    <h3 className='font-semibold'>
                        <a href={item?.link}
                            target='_blank'>
                            {item?.title}
                        </a>
                    </h3>
                    <p className='text-xs' id='date'>{formatDate(item?.pubDate)}</p>
                </div>

                <p className='text-sm'> {item?.description}</p>
                <br />

                <div className='flex justify-end'>
                    <button className=' border-2 p-2 border-darkNavyBlue rounded-md bg-#243763 bg-mediumPinkishBeige bg-blend-darken hover transition-colors duration-300 hover:bg-darkNavyBlue hover:text-offWhite'>
                        <a href={item?.link} target='_blank'>Read More</a>
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
