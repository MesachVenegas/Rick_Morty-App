import React from 'react';
import { useState, useEffect } from 'react';
import { rickApi } from '../../API/Api';
import LocationInfo from '../LocationInfo/Locationinfo'
import './boxContenten.css'


const BoxContent = () => {
    const [location, setLocation] = useState([]);
    const [randomLocation, setRandomLocation] = useState(undefined)

    const getLocation = async () => {
        await rickApi.get('/location')
        .then(res => setLocation(res.data.results))
    }

    useEffect( () =>{
        // Math.floor( Math.random() * location.length)
        getLocation(`/location`)
    },[])

    console.log(location);

    return (
        <div className='flex__container content'>
            <LocationInfo />
            <h1>Caja de Contenido</h1>
            <div className="card__item">
                <h3 className="name">Nombre: </h3>
            </div>
        </div>
    );
};

export default BoxContent;