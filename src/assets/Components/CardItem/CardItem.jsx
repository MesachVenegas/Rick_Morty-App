import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './cardItem.css'

const CardItem = ({ url }) => {
    const [character, setCharacter] = useState({})
    const [isAlive, setIsAlive]= useState(null)

    const getResident = async (url) => {
        await axios.get(url)
            .then(res => {
                setCharacter(res.data)
                setIsAlive(res.data.status)
                // console.log(res.data.status)
            })
            .catch(err => console.error(err))
    }
    useEffect( () =>{
        getResident(url)
    },[url])

    return (
        <li className="character__card">
            <div className="avatar">
                <img src={character?.image} alt={character.name} />
                <span className={`led ${isAlive}`}></span>
            </div>
            <div className="character__info">
                <h2>{character.name}</h2>
                <p>Specie: {character.species}</p>
                <p>Genero: {character.gender}</p>
                <p>Type: {character.type ? character.type : "N/A"}</p>
                <p>Location: {character.location?.name}</p>
                <p>Origin: {character.origin?.name}</p>
            </div>
        </li>
    );
};

export default CardItem;