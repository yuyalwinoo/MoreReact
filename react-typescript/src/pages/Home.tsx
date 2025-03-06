import { useEffect, useState } from 'react'
import { Recipe } from '../types/Recipe';
import RecipeCard from '../components/RecipeCard';
import RecipeListLoader from '../components/Loading/RecipeListLoader';

const Home = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        const getRecipes = async()=>{
            try {
              setLoading(true);
              const response = await fetch('https://dummyjson.com/recipes');
              const data = await response.json();
              setRecipes(data.recipes);
            } catch (error) {
              console.log(error)
            } finally {
              setLoading(false);
            }
        }
        getRecipes();
    },[])
  return (
    <main className="grid grid-cols-2 md:grid-cols-4 gap-6">
    {
      loading 
        ? [...Array(8)].map((_, index) => <RecipeListLoader key={index} />)  
        : recipes.length > 0 
          ? recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
          : <p className="col-span-4 text-center">No recipes found.</p>
    }
  </main>
  )
}

export default Home