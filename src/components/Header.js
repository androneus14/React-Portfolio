import React from 'react';
import Navigation from './Navigation';

export default function Header({ currentSection, setCurrentSection }) {
    return(
        <header className='navbar'>
            <h1>Andy Nguyen</h1>
            <Navigation 
                currentSection={currentSection} setCurrentSection={setCurrentSection}>
            </Navigation>
        </header>
    )
}

