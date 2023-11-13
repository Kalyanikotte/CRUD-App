import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Read = () => {
  let [users,setUsers]=useState([])
  let {id}=useParams()
  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id)
    .then((result)=>setUsers(result.data))
    .catch((error)=>console.log(error))
  },[])


  return (
    <>
     <h1>{users.id}</h1>
    <h1>{users.name}</h1>
    <h1>{users.age}</h1>
    <h1>{users.place}</h1>
    <h1>{users.dob}</h1>
    <button><Link to={`/update/${users.id}`}>Edit</Link></button>
    <button><Link to={'/'}>GO BACK</Link></button>
   
    </>
  )
}

export default Read