import React from 'react';
import './locationInfo.css'

const LocationInfo = ({loc}) => {
    return (
        <>
            <h3>{loc.name}</h3>
            <ul className="content__location">
                <li>Type: {loc.type}</li>
                <li>Dimension: {loc.dimension}</li>
                <li>Population: {loc.residents?.length}</li>
            </ul>
        </>
    );
};

export default LocationInfo;