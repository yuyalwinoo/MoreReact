import { Difficulty } from "../types/Recipe"

type DifficultyCardProps = {
    difficulty : Difficulty
}
const DifficultyCard = ({difficulty}:DifficultyCardProps) => {
  return (
    <p className="flex items-center text-sm border-2 border-amber-950  px-4 rounded-2xl">{difficulty}</p>
  )
}

export default DifficultyCard