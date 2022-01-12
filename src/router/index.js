import React from 'react';


import {Route,Routes} from 'react-router-dom';
import About from '../views/About';
import Home from '../views/Home';
import Navbar from '../components/Navbar';
import Contact from '../views/Contac';
import NotMatch from '../views/errors/NotMatch';

function Router()
{
    return (
        
            <Routes>
                
                    <Route exact path="/" element={
                        <Navbar>
                            <Home />
                        </Navbar>
                    }/>
                    <Route  path="about" element={
                        <Navbar>
                            <About />
                        </Navbar>
                    }/>
                    <Route  path="contact" element={
                    <Navbar>
                        <Contact/>
                    </Navbar>
                    }/>
                <Route path="*" element={<NotMatch/>}/>
            </Routes>
   
    )
}

export default Router;
