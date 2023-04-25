import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import LocationInfo from '../LocationInfo/LocationInfo';
import './boxContenten.css'


const BoxContent = ({loc}) => {
    const [location, setLocation] = useState([]);
    // const [residents, setResidents] = useState([])

    // Obtenemos la locaion aleatoriamente.
    const getLocation = async (loc) =>{
        let randomLoc = Math.floor(Math.random() * 125);

        if(loc){
            console.log("Buscando locación")
        }
        else{
            await axios.get(`https://rickandmortyapi.com/api/location/${randomLoc}`)
                .then(res =>{
                    setLocation(res.data)
                })
                .catch(err => console.log(err))
        }
    }


    useEffect( () =>{
        getLocation()
    },[loc])


    return (
        <div className='flex__container content'>
            <div className='flex__container info__location'>
                <LocationInfo loc={location}/>
            </div>
            <ul className="data__containt">
                {
                    location?.residents?.map(url => (
                        <CardItem key={url} url={url}/>
                    ))
                }
            </ul>
        </div>
    );
};

export default BoxContent;