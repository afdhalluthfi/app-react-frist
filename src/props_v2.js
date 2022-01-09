import React, {useState} from 'react';
import axios from 'axios';
import Card from './components/Card';

function App(){

  return(
    <div className='p-5'>
           <div className='container'>
             <h1>Belajar Reusible card componen</h1> 
             <hr/>
             <div className='row'>
               <div className='col-md-2'>
                 <Card data={{
                   fotoUrl:'http://placekitten.com/g/300/200/',
                    title:'post pertama',
                    waktuPost:'6 jun 2022',
                  }}
                 />
               </div>
               <div className='col-md-2'>
                 <Card data={{
                   fotoUrl:'http://placekitten.com/g/300/200/',
                    title:'post kedua',
                    waktuPost:'4 jun 2022',
                  }}
                 />
               </div>
               <div className='col-md-2'>
                 <Card data={{
                   fotoUrl:'http://placekitten.com/g/300/200/',
                    title:'post ketiga',
                    waktuPost:'8 jun 2022',
                  }}
                 />
               </div>
           </div>
          </div>
      </div>
  )
}
export default App;