import { useParams } from "react-router-dom";
import { useAnimeDetails } from "../hooks/useAnimeDetails";


export default function AnimeDetails(){


    const {id} = useParams();


    const {anime, loading} = useAnimeDetails(id!);



    if(loading){
        return <h1>Loading...</h1>
    }



    return(

        <div className="p-10">


            <div className="flex gap-10">


                {/* poster */}

                <img
                    src={anime.images.jpg.image_url}
                    className="w-72 rounded"
                />



                {/* info */}

                <div>


                    <h1 className="text-5xl font-bold">

                        {anime.title}

                    </h1>



                    <p className="mt-5">

                        {anime.synopsis}

                    </p>



                    <div className="mt-5">


                    <h2>
                        Episodes: {anime.episodes}
                    </h2>


                    <h2>
                        Score: {anime.score}
                    </h2>


                    </div>


                </div>


            </div>


        </div>

    )
}