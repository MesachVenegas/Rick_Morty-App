import React from 'react';

const Locationinfo = ({name, type, dimension, residents}) => {
    return (
        <div className='flex__container info__location'>
            <h3>{name}</h3>
            <ul className="content__location">
                <li>Type:{type}</li>
                <li>Dimension: {dimension}</li>
                <li>Population: {residents}</li>
            </ul>
        </div>
    );
};

export default Locationinfo;