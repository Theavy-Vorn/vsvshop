import React from 'react';
import { Link } from 'react-router-dom';

const CTAComponent = () => {
    return (
        <div className='bg-purple-100 mt-16'>
            <section className='mb-5 pt-5'>
                
                <form class="max-w-md mx-auto">   
                    <label for="default-search" class="mb-2 text-sm font-medium text-black sr-only ">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black-500 border border-purple-800 rounded-lg bg-white-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white-700 dark:border-white-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-purple-500" placeholder="Search..." required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-purple-800 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Search</button>
                    </div>
                </form>

            </section>
            <section
                className="overflow-hidden  bg-[url(https://i.pinimg.com/736x/71/6b/82/716b820a8a1d65e7f0bfd5bdb4636dca.jpg)] bg-cover bg-top bg-no-repeat"
                >
                <div className="p-15 md:p-10 lg:px-10 lg:py-20">
                    <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                    <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Go to shop</h2>

                    <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
                        doloribus iure architecto quae voluptatum beatae excepturi dolores.
                    </p>

                    <div className="mt-4 sm:mt-8">
                        <a
                        href="#"
                        className="inline-block rounded-full bg-purple-800 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                        >
                        Shop now
                        </a>
                    </div>
                    </div>
                </div>
            </section>
           
        </div>
    );
}

export default CTAComponent;
