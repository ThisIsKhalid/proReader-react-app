import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from './Book';

const Books = () => {

    const booksLoader = useLoaderData();
    const {books} = booksLoader;

    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 container mx-auto mt-5'>
            {
                books.map( book => <Book
                key={book.isbn13}
                book={book}
                ></Book>)
            }
        </div>
    );
};

export default Books;