import React, {useState} from 'react';
import axios from 'axios';

function App(){

  let [nama,setNama]=useState('')
  let [umur,setUmur] = useState('')
  let [hoby,setHoby] = useState('')

  let submitHandel = e=>{
    e.preventDefault();
    setHoby(`${nama} dan ${umur}`)
    setNama('')
    setUmur('')
  }
  return(
    <div className='p-5'>
           <div className='container'>
             <div className='row'>
               <div className='col-md-6'>
                 <div className='card'>
                   <div className='card-header'>from Handling</div>
                   <div className='card-body'>
                     <form  onSubmit={submitHandel}>
                       <div className='mb-4'>
                            <label htmlFor='nama' className='form-label'>nama</label>
                            <input type='text' 
                                   id='nama' 
                                   name='nama'
                                   defaultValue={nama}
                                   onChange={(e)=>setNama(e.target.value)}
                                   className='form-control'
                                    />
                       </div>
                       <div className='mb-4'>
                            <label htmlFor='umur' className='form-label'>umur</label>
                            <input type='text' 
                                   id='umur' 
                                   name='umur'
                                   defaultValue={umur}
                                   onChange={(e)=>setUmur(e.target.value)}
                                   className='form-control'
                                    />
                       </div>
                       <div className='mb-4'>
                            <label htmlFor='hoby' className='form-label'>hoby</label>
                            <input type='text' 
                                   id='hoby' 
                                   name='hoby'
                                   defaultValue={hoby}
                                   className='form-control' />
                       </div>
                       <button type='submit' className='btn btn-primary btn-block'>submit</button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
  )
}

export default App;