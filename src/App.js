import React, { useState } from 'react';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function App() {
    const [section] = useState([ 'About', 'Portfolio', 'Contact', 'Resume' ])
    const [currentSection, setCurrentSection] = useState(section[0]);

    return(
        <div>
            <Header>
                <Navigation>
                    sections={section}
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                </Navigation>
            </Header>

            <body>
                {(currentSection === 'About') ? <About />
                : (currentSection === 'Portfolio') ? <Portfolio />
                : (currentSection === 'Contact') ? <Contact />
                : (currentSection === 'Resume') ? <Resume />
                : <About />}
            </body>

            <Footer></Footer>
        </div>
    )
}