import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SongDetails = () => {
const [trackInfo, setTrackInfo] = useState();

const params = useParams()
console.log("here's the ID from the params",params.id)

const fetchTrackDetails = async () => {
    try{
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/track/${params.id}`)
    if ( response.ok) {
        const data = await response.json()
        console.log("Here is the track Info", data)
        setTrackInfo(data)        
    } else {
        console.log("There is an error fetching")
    }
    } catch(error) {
        console.log(error)
    }
}


    useEffect(() => {
        if(!trackInfo){
            fetchTrackDetails()
        }
    }, );


    return(
        <>
        </>
    )
}

export default SongDetails