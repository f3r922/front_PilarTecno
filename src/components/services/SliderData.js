import {useEffect, useState} from 'react';

export const SliderData = (props) => {

    const [places, setPlaces] = useState([])
    const [loading, setLoading] = useState('false')
    
    useEffect(() => {
        setLoading('true')
        fetch(`http://localhost:4000/places/categoria/${props.category}`)
        .then((respuesta) => {
            respuesta.json()
            .then((getPlaces) => {
                console.log(getPlaces);
                setPlaces(getPlaces)
                setLoading(false)
            });
        });
    },[props.category]);

    return {places, loading}
}