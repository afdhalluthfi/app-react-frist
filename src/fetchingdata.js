import React, {useEffect, useState} from 'react';
import axios from 'axios';
function App(){

    let [user,setUser]=useState([])

     let dataUser= async()=>{
        try {
          let responses = await axios.get('https://jsonplaceholder.typicode.com/users')
          // console.log(responses.data)
          setUser(responses.data)
        } catch (error) {
          console.log(error.message);
        }
    }

    //manggil data 
    useEffect(()=>{
       dataUser();
    },[])

  return(
    <div className='p-5'>
           <div className='container'>
             <h1>Belajar Useeffect untuk parsding data</h1> 
             <hr/>
             <div className='row justify-content-center'>
               <div className='col-md-6'>
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
                     {
                       user.map((u,index)=>{
                         return (
                            <tr key={index}>
                              <td>{u.name}</td>
                              <td>{u.username}</td>
                              <td>{u.email}</td>
                              <td>{u.website}</td>
                              <td>{u.phone}</td>
                            </tr>
                         )
                       })
                     }
                   </tbody>
                 </table>
               </div>
           </div>
          </div>
      </div>
  )
}
export default App;