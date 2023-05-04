import React from 'react';
import './Header.css';
import Home from '../../Home/Home';


const Header = () => {
    return (
        <>
            <header className='banner relative'>
                <section className='flex container mx-auto p-12'>
                    <div className="md:w-1/2 text-white">
                        <h1 className="md:text-7xl text-5xl font-bold">Get the best food <span className='text-red-600'>from chefer</span></h1>
                        <p className='md:text-xl my-5 md:text-center'>Treat your taste buds to a delightful experience at Chafer - where every dish is a masterpiece! we don't just serve food, we serve happiness on a plate</p>
                    </div>
                </section>
            </header>
            <Home />
        </>
    );
};

export default Header;