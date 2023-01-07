import React from 'react';

const Locationinfo = ({name, type, dimension, residents}) => {
    return (
        <div className='flex__container info__location'>
            <h3>{name}</h3>
            <ul className="content__location">
                <li>Type: {type ? type : 'Unknown'}</li>
                <li>Dimension: {dimension ? dimension : 'Unknown'}</li>
                <li>Population: {residents.length}</li>
            </ul>
            <hr />
        </div>
    );
};

export default Locationinfo;