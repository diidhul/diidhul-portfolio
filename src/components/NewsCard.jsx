import React from 'react'

const NewsCard = () => {
    return (
        <div>
            <img className='w-40 rounded-lg ' src="https://cdn.cnnindonesia.com/cnnid/images/logo_cnn_fav.png" alt="Thumbnail" />
            <br />
            <div className='container flex justify-between flex-col-2'>
                <h3 className='font-semibold'>News Title</h3>
                <p id='date'>22/12/2024</p>
            </div>

            <p className='text-sm'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Qui quisquam assumenda non numquam consequuntur, similique, necessitatibus
                repellat, asperiores tempora nam praesentium quasi labore ratione ex debitis
                nihil voluptate eveniet perferendis.</p>
            <br />

            <div className='flex justify-end'>
                <button className=' border-2 p-2 border-darkNavyBlue rounded-md bg-#243763 bg-mediumPinkishBeige bg-blend-darken hover transition-colors duration-300 hover:bg-darkNavyBlue hover:text-offWhite'>Read More</button>
            </div>
        </div>
    )
}

export default NewsCard
