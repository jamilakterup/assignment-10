import React from 'react';
import {useLoaderData} from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';

const Recipes = () => {
    const recipesData = useLoaderData();
    const recipes = recipesData.recipe;
    return (
        <div>
            <NavBar />
            <div className="my-12 container mx-auto flex flex-col gap-12">
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.image}
                        recipe={recipe}
                    />)
                }
            </div>
            <Footer />
        </div>
    );
};

export default Recipes;