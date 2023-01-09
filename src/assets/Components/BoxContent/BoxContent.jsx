import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import LocationInfo from '../LocationInfo/LocationInfo';
import './boxContenten.css'


const BoxContent = () => {
    const [location, setLocation] = useState([]);
    const [characters, setCharacters] = useState([])

    // Obtenemos la locaion aleatoriamente.
    const getLocation = async () =>{
        let loc = Math.floor(Math.random() * 125);
        await axios.get(`https://rickandmortyapi.com/api/location/${loc}`)
            .then(res =>{
                setLocation(res.data)
                setCharacters(res.data.residents)
            })
            .catch(err => console.log(err))
        }

    useEffect( () =>{
        getLocation()
    },[])

    const loadData = () =>{
        return(
            characters.map(char => (
                <CardItem key={char?.id} character={char} />
            ))
        )
    }

    return (
        <div className='flex__container content'>
            <div className='flex__container info__location'>
                <LocationInfo loc={location}/>
            </div>
            <ul className="data__containt">
                {loadData()}
            </ul>
        </div>
    );
};

export default BoxContent;