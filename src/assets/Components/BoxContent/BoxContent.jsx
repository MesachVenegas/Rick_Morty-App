import React from 'react';
import { useState, useEffect } from 'react';
import { rickApi } from '../../API/Api';
import LocationInfo from '../LocationInfo/Locationinfo'
import './boxContenten.css'


const BoxContent = () => {
    const [location, setLocation] = useState([]);
    const [randomLocation, setRandomLocation] = useState(1);

    const getLocation = async () => {
        await rickApi.get('/location')
            .then(res => setLocation(res.data.results))
            .then(
                )
    }

    const genLocation = async () =>{
        const locationRandom =  Math.floor(Math.random() * location.length)
        setRandomLocation(locationRandom)
    }

    useEffect( () =>{
        getLocation()
        genLocation()
    },[])

    console.log(location[randomLocation]);


    return (
        <div className='flex__container content'>
            <div className="locationInfo">
                <LocationInfo loc={location[randomLocation]}/>
            </div>
            <div className="dataContaint">
                <h1>Caja de Contenido</h1>
                <div className="card__item">
                    <h3 className="name">Nombre: </h3>
                </div>
            </div>
        </div>
    );
};

export default BoxContent;