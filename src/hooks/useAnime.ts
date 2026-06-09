import { useEffect, useState } from "react";
import { getTopAnime } from "../api/jikan";


export function useAnime(){
    
    const [anime,setAnime] = useState<any[]>([])
    const [loading,setloading] = useState(true)
    const [error,seterror] = useState("")

    useEffect(()=>{

        async function fetchAnime(){
            try{
                const data = await getTopAnime()
                setAnime(data)
            }
            catch(err){
                seterror("someThing went wrong")
            }

            finally{
                setloading(false)
            }
        }

        fetchAnime()

    },[])

    return{
        anime,
        loading,
        error
    }
    
}