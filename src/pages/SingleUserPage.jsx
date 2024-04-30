import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'




const SingleUserPage = () => {
    const [data, setData]=useState({});
    const params= useParams();
    console.log(params);
    async function fetchingData(params){
        try{

            let response= await fetch(`https://reqres.in/api/users/${params.id}`);
            let data= await response.json();
    
            console.log(data);
            setData(data?.data);
         
        }
        catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
       fetchingData(params);
    },[params.id])
    return (
<div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center" ,border:"1px solid grey",margin:"10px",padding:"10px"}}>
    <img src={data.avatar} alt="" />
    <p>{data.first_name}</p>
    <Link to="/users">
    <button>go back</button>
    </Link>
</div>
  )
}

export default SingleUserPage