import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function() {
    return(
        <footer>
            <ul className='navbar text-align-center'>
                <li className='nav-bar'>
                    <a className='nav-link' href='https://www.linkedin.com/in/andy-nguyen-839901230/'><FaLinkedin/></a>
                </li>
                <li className='nav-bar'>
                    <a className='nav-link' href='https://github.com/androneus14'><FaGithub/></a>
                </li>
                <li className='nav-bar'>
                    <a className='nav-link' href='mailto:andynguyen_3@hotmail.com'>andynguyen_3@hotmail</a>
                </li>
            </ul>
        </footer>
    )
}