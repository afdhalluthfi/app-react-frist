import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios  from 'axios';
function Show () {
  let [user,setUser]=useState([]);
  let { identityfier } = useParams();

  let getUserId= async ()=>{
    try {
      let response = await axios.get(
				`https://jsonplaceholder.typicode.com/users/${identityfier}`
			);
			setUser(response.data);  
    } catch (error) {
      console.log(error.message);  
    }
    
  }

  useEffect(()=>{
    getUserId()
  },[identityfier])
  console.log(identityfier);
        return (
        <div>
          <h3>bebebe</h3>
          <div className="card">
            <div className="card-header"></div>  
            <div className="card-body">
              <p>Name: {user.name}</p>
              <p>username : {user.username}</p>
              <p>phone : {user.phone}</p>
              <p>website : {user.website}</p>
            </div>  
          </div>  
        </div>
        ) 
}
    export default Show;