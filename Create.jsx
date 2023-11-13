import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Create = () => {
  let [data,setData]=useState({
    name:"",
    place:"",
    age:"",
    dob:""
})

  let navigate=useNavigate()
  let {name,place,age,dob}=data;

  let handleChange=(e)=>{
    let {name,value}=e.target;
    setData({...data,[name]:value})
  }

  let handleSubmit=(e)=>
  {
    e.preventDefault();
    axios.post("http://localhost:3000/users",data)
    .then((val)=>{
      console.log("success");
      toast.success("Registered Successfully")
      // toast("Registered Successfully")
      // toast.error("Registered Successfully")
      // navigate("/")
    })
    // console.log(name,place,age,dob);
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value={name}  onChange={handleChange}/> <br /><br />

        <label htmlFor="place">Place:</label>
        <input type="text" name="place" id="place"  value={place} onChange={handleChange}/> <br /><br />

        <label htmlFor="age">Age:</label>
        <input type="tel" name="age" id="age"  value={age} onChange={handleChange}/> <br /><br />

        <label htmlFor="dob">DOB:</label>
        <input type="date" name="dob" id="dob" value={dob}  onChange={handleChange}/> <br /><br />

        <input type="submit" value="Register" />
        <button><Link to='/'>GO BACK</Link></button>

        <ToastContainer />
      </form>
  )
}

export default Create