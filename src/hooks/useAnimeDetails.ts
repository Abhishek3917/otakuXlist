import {useEffect,useState} from "react";
import {getAnimeDetails} from "../api/jikan";


export function useAnimeDetails(id:string){


const [anime,setAnime]=useState<any>(null);

const [loading,setLoading]=useState(true);



useEffect(()=>{


async function load(){


const data = await getAnimeDetails(id);

setAnime(data);

setLoading(false);


}


load();


},[id])


return {
anime,
loading
}

}