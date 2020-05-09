import React from 'react';

import './search-box.css';

export const Searchbox = ({ placeholder, searchStartupNames }) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        autoFocus
        onKeyPress={e => {
            if (e.key === 'Enter') {
                searchStartupNames(e.target.value)
            }
        }}
    />
)