import React, { useEffect, useState } from 'react'

const Fetch = () => {
const [data,setData]=useState();


useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((json)=>setData(json))
.then((error)=>console.log("Error",error))
},[])
  return (
    <div>


         {
            data && data.map((item)=>{
                return (
                    <h1>{item.name}</h1>
                )
            })
        } 
    </div>
  )
}

export default Fetch