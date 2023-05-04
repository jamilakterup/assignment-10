import React from "react";
import {useState} from "react";
import {toast} from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const Recipe = ({recipe}) => {
    const {name, image, method, rating, ingredients} = recipe;
    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavorite = () => {
        setIsFavorite(true);
        toast.success("added to favorite");
    };
    return (
        <div className="w-full mx-auto bg-white rounded shadow overflow-hidden">
            <div className="md:flex">
                <LazyLoad offset={0} className="md:flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={image}
                        alt={name}
                    />
                </LazyLoad>
                <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-gray-600 font-semibold">
                        {name}
                    </div>
                    <p className="mt-2 text-gray-500">
                        Ingredients: {ingredients.join(", ")}
                    </p>
                    <p className="mt-2 text-gray-500">method: {method}</p>
                    <div className="mt-4">
                        <span className="text-gray-500">
                            Rating: {rating} out of {rating} stars
                        </span>
                    </div>
                    <div className="mt-6">
                        <button
                            onClick={handleFavorite}
                            disabled={isFavorite}
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded font-semibold text-xs text-white uppercase tracking-widest bg-gray-500 hover:bg-gray-600 active:bg-gray-700 outline-none focus:border-gray-600 focus:ring ring-gray-300 disabled:opacity-25 disabled:cursor-not-allowed transition ease-in-out duration-150"
                        >
                            Add to favorites
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;