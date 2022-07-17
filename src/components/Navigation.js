import React from 'react';

export default function Navigation({ currentSection, setCurrentSection }) {
    const navigationLinks = ['About', 'Portfolio', 'Contact', 'Resume']; 
    return(
        <nav>
            <ul className='nav-section'>
                {navigationLinks.map(navigationLink => {
                    <li
                        key={navigationLink}
                        onClick={() => setCurrentSection(navigationLink)}
                        className={
                            currentSection === navigationLink ? 'nav-link active nav-item': 'nav-link nav-item'
                        }
                    >
                    {navigationLink}
                    </li>
                })}
            </ul>
        </nav>
    )
}