import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const {title, authors, rating, price, image, desc} = book;
    return (
        <div className='flex md:flex-row flex-col items-center container mx-auto mt-3'>
            <div className='basis-1/2 text-center'>
                <img src={image} alt="" />
            </div>
            <div className='basis-1/2'>
                <h1 className='text-4xl font-bold font-mono text-blue-500'>{title}</h1>
                <p className='text-lg font-medium'>{authors}</p>
                <p><span className='text-2xl font-bold'>Price:</span> <span className='text-5xl text-red-500 font-extrabold font-mono'> {price}</span></p>
                <p><span className='text-2xl font-bold'>Ratings:</span><span className='text-orange-500 text-3xl font-semibold'> {rating}</span></p>
                <p className=''>{desc}</p>
                <div className='mt-6'>
                    <Link className='bg-blue-500 px-5 py-3 rounded-md text-white text-lg font-medium'>Buy Now</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;