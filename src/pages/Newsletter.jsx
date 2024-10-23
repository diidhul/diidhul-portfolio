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
        <section className='container px-8 pb-20 mx-auto md:px-16 lg:px-16'>
            <h1 className='px-24 py-8 text-3xl font-bold underline'>News Letter</h1>
            <br />
            <div className='grid grid-cols-2 gap-8 px-24'>
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
