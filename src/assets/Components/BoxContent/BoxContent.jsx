import React from 'react';
import { useState, useEffect } from 'react';
import { rickApi } from '../../API/Api';
import LocationInfo from '../LocationInfo/Locationinfo'
import './boxContenten.css'


const BoxContent = () => {
    const [location, setLocation] = useState([]);
    const [randomLocation, setRandomLocation] = useState({});

    const getLocation = async () => {
        await rickApi.get('/location')
            .then(res => setLocation(res.data.results))
        }


    useEffect( () =>{
        getLocation()
        setRandomLocation( location?.[ Math.floor( Math.random() * location.length ) ])
    },[])


    // console.log(location);
    console.log(randomLocation);

    return (
        <div className='flex__container content'>
            <LocationInfo key={randomLocation?.id} name={randomLocation?.name} type={randomLocation?.type} residents={randomLocation?.residents}/>
            <hr />
            <h1>Caja de Contenido</h1>
            <hr/>
            <div className="card__item">
                <h3 className="name">Nombre: </h3>
            </div>
        </div>
    );
};

export default BoxContent;