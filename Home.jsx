import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    let [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((result)=>setUsers(result.data))
        .catch((error)=>console.log(error))
    },[])

    let handleDelete=(id)=>{
        axios.delete("http://localhost:3000/users/"+id)
        .then(()=>{
            console.log("Deleted Successfully");
            window.location.reload()
        })
    }
  return (
    <>
    <button><Link to="/create">Add</Link></button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                    <th>Dob</th>
                </tr>
            </thead>
                
            <tbody>
            {
                users.map((val)=>{
                    return(
                        <React.Fragment key={val.Id}>
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>{val.place}</td>
                                <td>{val.dob}</td>
                                <td><button><Link to={`/read/${val.id}`}>Read</Link></button></td>
                                <td><button><Link to={`/update/${val.id}`}>Edit</Link></button></td>
                                <td><button onClick={()=>handleDelete(val.id)}>Delete</button></td>
                            </tr>
                        </React.Fragment>
                    )
                })
            }
            </tbody>
        </table>
    </>
  )
}

export default Home