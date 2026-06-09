import { useAnime } from "../hooks/useAnime"
import { AnimeGrid } from "../components/AnimeGrid"
export default function AnimeListing(){

    const {anime,loading,error} = useAnime()

    if(loading){
        return <h1>loading....</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            <AnimeGrid anime={anime} />
        </div>
    )

}

