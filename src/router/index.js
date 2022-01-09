import React from 'react';


import {Route,Routes} from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';

function Router()
{
    return (
        
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route  path="about" element={<About />}/>
            </Routes>
        
    )
}

export default Router;
