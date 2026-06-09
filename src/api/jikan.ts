const BASE_URL = import.meta.env.VITE_JIKAN_URL;

export async function getTopAnime() {

    const response = await fetch(`${BASE_URL}/top/anime`)
    
    if (!response){
        throw new Error("Failed to Fetch the Top Anime")
    }

    const data = await response.json()

    return data.data
}

export async function getAnimeDetails(id:string){

    const response = await fetch(`${BASE_URL}/anime/${id}/full`)

    if(!response){
        throw new Error("Failed to fetch Anime Details")
    }

    const data = await response.json()

    return data.data
}