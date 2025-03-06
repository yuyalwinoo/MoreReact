import { Link } from "react-router"
import { Recipe } from "../types/Recipe"
import Ratings from "./Ratings"
import DifficultyCard from "./DifficultyCard"
import Tooltip from "./Tooltip"
import { useState } from "react"

type RecipeCardProps = {
    recipe : Recipe
}
const RecipeCard = ({recipe}:RecipeCardProps) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
        <Link to={`/recipes/${recipe.id}`} className="rounded-md bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4">

            {/* {!imageLoaded && (
                <div className="rounded-md bg-gray-300 animate-pulse h-10 w-full"></div>
            )} */}
            <img 
                src={recipe.image} 
                alt={recipe.name} 
                className={`rounded-md object-cover h-40 w-full transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                onLoad={() => setImageLoaded(true)}
            />

            <Tooltip name={recipe.name.length > 14 ? ` ${recipe.name.substring(0,14)} ...` : recipe.name}
                    showTooltip={recipe.name}/>
                
            <div className="text-xs font-semibold flex justify-between items-center mt-2">
                <DifficultyCard difficulty={recipe.difficulty}/>
                <Ratings rating={recipe.rating}/>
            </div>
        </Link>
    )
}

export default RecipeCard