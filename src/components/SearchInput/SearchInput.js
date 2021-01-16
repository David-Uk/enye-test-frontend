import React from 'react';

import './SearchInput.css';

const SearchInput = ({ handleChange }) => {

    return (
        <form className='input-container'>
            <input
                className='input'
                type='search'
                placeholder='Search profiles'
                onChange={handleChange}
            />
        </form>
    )
}

export default SearchInput;