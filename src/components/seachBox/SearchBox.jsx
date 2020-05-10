import React from 'react';

import './search-box.css';

export const SearchBox = ({ placeholderName, handleSearchSubmit }) => {
    return (
        <input
            className='search'
            type='search'
            placeholder={placeholderName}
            autoFocus
            onKeyPress={e => {
                if (e.key === 'Enter') {
                    handleSearchSubmit(e.target.value);
                }
            }}
        />
    )
}