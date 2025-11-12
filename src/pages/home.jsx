import React, { useEffect, useState } from 'react';

import Slider from '../component/header/Slider'
import TopRatedBooks from '../component/TopRatedBooks';
import axios from 'axios';

import TopGenres from '../component/TopGenres';
import BestBookBanner from './BestBookBaner';
import AboutBookShelf from './AboutBookShelf';





const Home = () => {
    const [ratedBooks, setRatedBooks] = useState([])
    // const topBooks = useLoaderData()
    // console.log(topBooks)


    useEffect(() => {
        axios.get('http://localhost:3000/topbooks')
            .then(topBooks => {
                setRatedBooks(topBooks.data)
                console.log(topBooks)

            })
    }, [])
    console.log(ratedBooks)
    return (
        <div>
            <Slider></Slider>

            <h1 className=' text-3xl font-bold text-center text-gray-800 my-8'>Top Rated Books</h1>

            <div className='grid gap-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-14/15 mx-auto mt-5'>
                {
                    ratedBooks.map((topBook) => <TopRatedBooks key={topBook._id} topBook={topBook} ></TopRatedBooks>)
                }
            </div>

            <TopGenres></TopGenres>

            <BestBookBanner></BestBookBanner>

            <AboutBookShelf></AboutBookShelf>




        </div>
    );
};

export default Home;