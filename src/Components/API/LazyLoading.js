import React, { useEffect ,useState} from 'react'
import axios from 'axios'

const LazyLoading = () => {
    const [data,setData]=useState("")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{setData(response.data) 
             console.log(data)})
        .catch((error)=>console.log("Error",error))
    },[])
  return (
    <>
    <h3>LazyLoading : </h3>
    {
        data && data.map((item,index)=>{
            return(
                <>
                <img src={item.thumbnailUrl}></img>
                <p>{item.url}</p>
                </>
            )
        })
    }
    </>
  )
}

export default LazyLoading