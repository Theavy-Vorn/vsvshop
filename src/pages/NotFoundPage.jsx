import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
    return (
        <div className='bg-purple-100 h-[100vh]'>
            <section className="dark:bg-gray-900">
                <div className="py-5 px-4 mx-auto max-w-screen-xl lg:py-14 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-3 text-5xl tracking-tight font-extrabold lg:text-5xl text-primary-600 dark:text-primary-500">404</h1>
                        <div>
                            <img className="m-auto w-80" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/404/404-computer.svg" alt="404 Not Found"></img>
                        </div>
                        <p className="mb-3 text-2xl tracking-tight font-bold text-gray-900 md:text-2xl dark:text-white">Something's missing.</p>
                        <p className="mb-3 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <Link to="/" className="inline-flex text-white bg-purple-800 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-800 my-4">Back to Homepage</Link>
                    </div>   
                </div>
            </section>

           
        </div>
    );
}

export default NotFoundPage;
