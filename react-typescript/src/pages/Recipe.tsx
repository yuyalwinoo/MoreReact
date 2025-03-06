import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Recipe } from "../types/Recipe";
import Loading from "../components/Loading";
import DifficultyCard from "../components/DifficultyCard";
import Ratings from "../components/Ratings";

const RecipePage = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=>{
        const getSingleRecipe = async()=>{
            try {
                setLoading(true);
                const response = await fetch(`https://dummyjson.com/recipes/${id}`);    
                if (!response.ok) {
                    console.log(`Error: ${response.status} ${response.statusText}`)
                    return setRecipe(null);
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.log(error)
                return setRecipe(null);
            } finally {
                setLoading(false);
            }
        }
        getSingleRecipe();
    },[id])
    return (
        <div>
            {
                loading && <Loading/>
            }
            {
                !loading && !recipe && <p>No data found.</p>
            }
            {
                !loading && recipe && <main className=" mx-auto p-6 space-y-4 rounded-md bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold">{recipe.name}</h2>
                        <DifficultyCard difficulty={recipe.difficulty}/>
                    </div>
                    <Ratings rating={recipe.rating}/>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <div className="">
                                <div>
                                    <h2 className="text-xl font-medium">Ingredients</h2>
                                    <ol className="list-decimal px-4 my-3" >
                                        {
                                            recipe.ingredients.map((item,index)=><li 
                                            key={index}
                                            className="text-sm tracking-wide">{item}</li>)
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={recipe.image} alt={recipe.name} className="w-full h-64 rounded-2xl object-cover"/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium">Instructions</h2>
                        <ol className="list-decimal px-4 my-3" >
                            {
                                recipe.instructions.map((item,index)=><li 
                                key={index}
                                className="text-sm tracking-wider my-1">{item}</li>)
                            }
                        </ol>
                    </div>
                </main>
            }
        </div>
    )
}

export default RecipePage