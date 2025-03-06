const RecipeListLoader = () => {
  return (
    <div className="rounded-md bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] p-4 animate-pulse">
        {/* Image Skeleton */}
        <div className="rounded-md bg-gray-300 h-40 w-full"></div>

        {/* Name Skeleton */}
        <div className="mt-2 h-4 bg-gray-300 rounded w-3/4"></div>

        {/* Difficulty & Ratings Skeleton */}
        <div className="flex justify-between items-center mt-2">
            <div className="h-4 w-20 bg-gray-300 rounded"></div>
            <div className="h-4 w-16 bg-gray-300 rounded"></div>
        </div>
    </div>
  )
}

export default RecipeListLoader