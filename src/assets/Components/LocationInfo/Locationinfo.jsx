import React from 'react';
import './locationInfo.css'

const LocationInfo = ({loc}) => {
    return (
        <>
            <h3>{loc?.name ? loc.name : "Unknown" }</h3>
            <ul className="content__location">
                <li>Type: {loc?.type ? loc.type : "Unknown"}</li>
                <li>Dimension: {loc?.dimension ? loc.dimension : "Unknown"}</li>
                <li>Population: {loc?.residents?.length}</li>
            </ul>
        </>
    );
};

export default LocationInfo;