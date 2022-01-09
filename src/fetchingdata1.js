import React, {useEffect, useState} from 'react';
import axios from 'axios';
function App(){

    let [user,setUser]=useState([])
    let [identityfier,setIdentityfier]=useState(1)
    let [loading,setLoading]=useState(false)
     let dataUser= async()=>{
       setLoading(true)
        try {
          let responses = await axios.get(`https://jsonplaceholder.typicode.com/users/${identityfier}`)
          // console.log(responses.data)
          setUser(responses.data)
          setLoading(false)
        } catch (error) {
          setLoading(true)
          console.log(error.message);
        }
    }
    //manggil data 
    useEffect(()=>{
       dataUser();
    },[identityfier])

  return(
    <div className='p-5'>
           <div className='container'>
             <h1>Belajar Useeffect untuk parsding data</h1>
             <input type='text' defaultValue={identityfier} onChange={(e)=>setIdentityfier(e.target.value)} className='from-control'  /> 
             <hr/>
             <div className='row justify-content-center'>
               <div className='col-md-6'>
                 {
                   loading ? <div>memuat....</div>:
                   <table className='table'>
                   <thead>
                     <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Phone</th>
                     </tr>
                   </thead>
                   <tbody>
                            <tr>
                              <td>{user.name}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.website}</td>
                              <td>{user.phone}</td>
                            </tr>
                   </tbody>
                 </table>
                 }
               </div>
           </div>
          </div>
      </div>
  )
}
export default App;