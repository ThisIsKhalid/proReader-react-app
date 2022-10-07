import React from 'react';
import Lottie from "lottie-react";
import readingBoy from '../Assets/reading-boy.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto mt-4 sm:flex fles-row items-center'>
            <div>
                <p className='bg-amber-400 rounded-md inline text-sm p-1'>ON SALE!</p>
                <h1 className='text-4xl font-semibold'>A reader lives a thousand lives <span className='text-blue-500'>before he dies</span></h1>
                <p>Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren't very new after all. The man who does not read good books is no better than the man who can't.</p>
                <div className='my-5'>
                    <Link to='/books' className='bg-blue-500 px-5 py-3 rounded-md text-white text-lg font-medium'>Visit Store</Link>
                </div>
            </div>
            <div>
                <Lottie animationData={readingBoy} loop={true} />;
            </div>
        </div>
    );
};

export default Home;