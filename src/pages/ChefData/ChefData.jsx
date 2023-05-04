import React from 'react';
import {Link} from 'react-router-dom';

const ChefData = ({chef}) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-[230px] w-full' src={chef.bannerImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef.chefName}</h2>
                <p>{chef.chefDescription}</p>
                <p className='font-semibold'>{chef.experience}</p>
                <div className='flex'>
                    <p>Number of recipes: {chef.recipeNumber}</p>
                    <p>Likes: {chef.likes}</p>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/recipes/${chef.id}`}><button className="inline-flex items-center px-4 py-2 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest bg-gray-500 hover:bg-gray-600 active:bg-gray-700 outline-none focus:border-gray-600 focus:ring ring-gray-300 disabled:opacity-25 disabled:cursor-not-allowed transition ease-in-out duration-150">View recipe</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefData;