import React from 'react';
import { useState, useEffect } from 'react';
import { rickApi } from '../../API/Api';
import './boxContenten.css'


const BoxContent = () => {
    const [location, setLocation] = useState([]);

    const getLocation = async () => {
        await rickApi.get('/location')
        .then(res => setLocation(res.data.results))
    }

    useEffect( () =>{
        getLocation()
    },[])

    console.log(location);
    return (
        <div className='flex__container content'>
            <h1>Caja de Contenido</h1>
            <div className="card__item">
                <h3 className="name">Nombre: </h3>
                p.
            </div>
        </div>
    );
};

export default BoxContent;