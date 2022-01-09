import React from 'react';
import Navbar from './components/Navbar';
import Router from './router';
// import Router from './router';

function App()
{
    return (
      <div>
        <Navbar/>
       
        <div className="container">
           <Router/>
        </div>
      </div>
    )
}

export default App;