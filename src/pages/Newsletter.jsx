import React, { useState, useEffect } from 'react';
import NewsCard from '../components/newsCard';
import axios from 'axios'; //library untuk HTTP request


const Newsletter = () => {
    const [posts, setPosts] = useState([]) //declare posts, yang nnti nampung data dari API

    const getPosts = async () => { // Fungsi asinkron getPosts ngambil data dari API.
        try {
            const url = "https://api-berita-indonesia.vercel.app/cnn/teknologi/" //endpoint
            const response = await axios.get(url) //ngeget data, trus masukin ke response
            console.log(response); //ngeprint response

            setPosts(response?.data?.data?.posts); //catch data yang udah diambil dari api lalu aku map ke setPosts
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <section className='container px-4 pb-20 mx-auto sm:px-6 md:px-16'>
            <h1 className='px-4 py-8 text-2xl font-bold underline sm:px-8 md:px-24 sm:text-3xl'>News Letter</h1>
            <br />
            <div className='grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-8 sm:px-8 md:px-24'>
                {posts?.map((post, index) => (
                    <div key={index} className="h-full p-2 border-2 border-dashed rounded-lg border-darkNavyBlue">
                        <div className="flex flex-col justify-between h-full p-4 border-2 rounded-lg border-darkNavyBlue">
                            <NewsCard item={post} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Newsletter;
