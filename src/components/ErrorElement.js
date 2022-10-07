import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const error = useRouteError();
    return (
        <div className='flex justify-center mt-20'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold text-rose-600 font-mono'>{error.status}</h1>
                <p className='text-green-500 text-xl font-medium'>Sorry, an unexpected error has occurred</p>
                <br />
                <p className='text-3xl font-bold text-rose-600 font-mono'>
                    {
                        error.statusText || error.message
                    }
                </p>
            </div>
        </div>
    );
};

export default ErrorElement;