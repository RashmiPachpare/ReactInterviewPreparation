import React, { useEffect ,useState} from 'react'
import axios from "axios"

const Axios = () => {
    const [data,setData]=useState("");

    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>setData(response.data))
        .catch((error)=>console.log("Error",error))
    },[])
  return (
    <>
    
    {
        data && data.map((item)=>{
            return(
            <h3>{item.name}</h3>
            )
        })
    }
    </>
  )
}

export default Axios