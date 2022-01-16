import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
function User () { 

    let [users,setUsers]=useState([]);
    let getUser = async()=>{
        try {
            // let responses =await axios.get('https://jsonplaceholder.typecode.com/users')
            let responses =await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(responses.data);
            setUsers(responses.data)
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(()=>{
        getUser()
    },[]);
    

    return (
            <div>
                <div className='row'>
                    {
                        users.map((user,index)=>{
                            return(
                                <div className='col-md-4 mb-3' key={index}>
                                    <div className='card'>
                                        <div className='card-header'>{user.name}</div>
                                        <div className='card-body'>
                                            <a href={`http://${user.website}`} target='_blank' rel='noopener noreferrer'> {user.website} </a>
                                            <NavLink className='btn btn-success d-block' to={`/user/${user.id}`}> Ke website</NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }         
                </div>
            </div>
        ) 
}
export default User;