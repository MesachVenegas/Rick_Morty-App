import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cardItem.css'

const CardItem = ({character}) => {
    const [char, setChar] = useState({})
    const [status, setStatus]= useState('green')

    // https://rickandmortyapi.com/api/character/38
    const getResident = async (character) => {
        await axios.get('https://rickandmortyapi.com/api/character/38')
            .then(res => setChar(res.data))
    }
    useEffect( () =>{
        getResident()
    },[])

    return (
        <li className="character__card">
            <div className="avatar">
                <img src={char.image} alt={char.name} style={{ width: '150px' }} />
            </div>
            <div className="character__info">
                <p>Name: {char.name} - <span className='status__led' style={{backgroundColor: status}}></span>
                </p>
                <p>Specie: {char.species}</p>
                <p>Genero: {char.gender}</p>
                <p>Location: {char.location?.name}</p>
            </div>
        </li>
    );
};

export default CardItem;