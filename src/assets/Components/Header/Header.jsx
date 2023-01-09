import React, { useState } from 'react';
import './header.css';


const Header = () => {
    const [search, setSearch] = useState('')

    return (
        <div className='flex__container header'>
            <div className="header__title">
                <h1>Rick <span className='mid-title'> and</span> Morty</h1>
                {/* <h2>Wiki</h2> */}
            </div>
            <div className="header__search">
                <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className='input__search'
                    placeholder='Search'
                />
                <button className='search__btn' onClick={() => alert(search)}>Search</button>
            </div>
        </div>
    );
};

export default Header;