import { useNavigate } from "react-router-dom";
import type { Anime } from "../types/Anime";

type AnimeCardProps = {
    anime: Anime;
};
export function AnimeCard({anime}:AnimeCardProps){
    const navigate = useNavigate()
return(
<>


<div className="cursor-pointer" onClick={()=>navigate(`/anime/${anime.mal_id}`)}>

<img src={anime.images.jpg.image_url}/>

<h1>
{anime.title}
</h1>

</div>
</>
)

}