import type { Anime } from "../types/Anime";
import { AnimeCard } from "./AnimeCard"

type AnimeGridProps = {
    anime: Anime[];
};

export function AnimeGrid({anime}:AnimeGridProps){

    return(
        <div className="grid grid-cols-5 gap-5">
            {
                anime.map(item=>(

                    <AnimeCard  
                    key={item.mal_id}
                    anime={item} />
                ))
            }
        </div>
    )
}