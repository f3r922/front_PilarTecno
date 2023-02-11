import {useEffect, useState} from 'react';
import { useParams } from "react-router-dom"

export const PlaceData = () => {
 

    let {id} = useParams()
    console.log(id)
    const [place, setPlace] = useState([])
    const [loading, setLoading] = useState('false')

    useEffect(() => {

        setLoading('true')
        fetch(`http://localhost:4000/places/` + id  )
        .then((res) => {
            res.json()
            .then((response) => {
                const data = response
                setPlace(data)
                setLoading(false)
            });
        });
    },[id]);

    console.log(place)

    return {place, loading}
}