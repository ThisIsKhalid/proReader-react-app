import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
    const {image, price, title, isbn13} = book;
    return (
        <Link className='shadow-lg rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700' to={isbn13}>
            <img src={image} alt="" />
            <div className='pl-5 pb-3'>
                <h3 className='text-2xl font-medium text-blue-500'>{title}</h3>
                <p>Price: {price}</p>
            </div>
        </Link>
    );
};

export default Book;