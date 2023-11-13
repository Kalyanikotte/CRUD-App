import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Update = () => {
  let [users,setUsers]=useState([])
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""
})
  let {id}=useParams()
  let navigate=useNavigate()
  useEffect(()=>{
    axios.get("http://localhost:3000/users/"+id)
    .then((result)=>setData(result.data))
    .catch((error)=>console.log(error))
  },[])


  let handleChange=(e)=>
  {
    let {name,value}=e.target;
    setData({...data,[name]:value})
  }

  
  let handleUpdate=(e)=>
  {
    e.preventDefault();
    axios.put("http://localhost:3000/users/"+id,data)
    .then((val)=>{
      navigate('/')
    })

  }
  


  return (
    <form onSubmit={handleUpdate}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={data.name}  onChange={handleChange}/> <br /><br />

        <label htmlFor="place">Place:</label>
        <input type="text" name="place" id="place"  value={data.place} onChange={handleChange}/> <br /><br />

        <label htmlFor="age">Age:</label>
        <input type="tel" name="age" id="age"  value={data.age} onChange={handleChange}/> <br /><br />

        <label htmlFor="dob">DOB:</label>
        <input type="date" name="dob" id="dob" value={data.dob}  onChange={handleChange}/> <br /><br />

        <input type="submit" value="Update" />
        <button><Link to='/'>GO BACK</Link></button>
      </form>
 
  )
}


export default Update