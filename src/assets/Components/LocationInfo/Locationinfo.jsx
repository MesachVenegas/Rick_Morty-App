import { useState } from 'react';
import React from 'react';

const Locationinfo = ({randomLocation}) => {
    const [loc, setLoc] = useState('')
    setLoc(randomLocation)
    console.log(loc);

    if(!loc){
            return null;
        }
        else{
            return(
                <div className='flex__container info__location'>
                    <h3>{loc.name}</h3>
                    <ul className="content__location">
                        <li>Type: {loc.type}</li>
                        <li>Dimension: {loc.dimension} </li>
                        <li>Population: {loc.residents}</li>
                    </ul>
                    <hr />
                </div>
            )
        }
}

export default Locationinfo;