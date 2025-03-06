export type Recipe = {
    id          : number,
    name        : string,
    ingredients : string[],
    instructions: string[],
    difficulty  : Difficulty,
    image       : string,
    rating      : number,
    reviewCount : number,
}

export type Difficulty = "Easy" | "Medium";

