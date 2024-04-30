import React, { useContext, useEffect,useState } from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';

const getCurrentPage=(pageNumber)=>{
    pageNumber= Number(pageNumber);

    if(typeof pageNumber !== "number" && pageNumber<=0){
        pageNumber=1;
    }

    if(!pageNumber){
        pageNumber=1;
    }
    return pageNumber;
}



const Users = () => {
    const [data, setData]=useState([]);
   const {isAuth} =useContext(AuthContext);
   let [searchParams, setSearchParams]=useSearchParams();
   const initialPage= getCurrentPage(searchParams.get("page"));
   const navigate=  useNavigate();
   const [page, setPage]= useState(initialPage);


    async function fetchingData(page){
        try{

            let response= await fetch(`https://reqres.in/api/users?page=${page}`);
            let data= await response.json();
    
            // console.log(data.data);
            setData(data?.data || []);
        }
        catch(error){
            console.log(error);
        }

    }
    useEffect(()=>{
       fetchingData(page);
    },[page])

    useEffect(()=>{
        setSearchParams({page})
    },[page])

   const handlePageChange=(val)=>{
    const changeBy=  page +val;
    setPage(changeBy);
   }
 
    return (
        <>
    <h1>Users page</h1>
       
    {
        data.map((user)=>{
            return(
            <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center" ,border:"1px solid grey",margin:"10px",padding:"10px"}}>
                <Link to={`${user.id}`}>
                  <img src={user.avatar} alt="" />
                  <p style={{marginLeft:"40px"}}>{user.first_name} </p>
                </Link>
            </div>
            )
        })
    }
    <button onClick={()=>handlePageChange(-1)}>previous</button>
    <button onClick={()=>handlePageChange(1)}>next</button>
    </>
  )
}

export default Users