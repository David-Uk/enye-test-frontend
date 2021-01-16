import React from 'react';

import './Pagination.css'

export default function Pagination ({ profilesPerPage, totalProfiles, paginate, activeLink }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <ul className='pages'>
            {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                    <a className={activeLink === number ? 'current-link' : undefined} onClick={() => { paginate(number); }} href='!#'>
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    )
};
