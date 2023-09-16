import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {

    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const [error,setError] = useState('')

    useEffect(()=>{
        // const controller = new AbortController()
        (async ()=>{
            setLoading(true);
            try{
                let sp_id =  localStorage.getItem('sp_id');
                let customer_id =  localStorage.getItem('customer_id');
                let headers = {}
                if(sp_id || customer_id){
                console.log("ln 18", customer_id)
                const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
                 headers = { Authorization: `Bearer ${token}`  };      
                }
                const {data, status} = await axios.get(url,{headers})
                console.log(data,status,"RAEES",'useFetch')
                if(data && status==200){
                    setData(data)
                    setError('')
                }
            }
            catch(error){
                setData([]);
                setError(error.message)
            }
            setLoading(false)
        })()

        // return ()=> controller.abort()
    },[])

    const reFetch = async() => {
        setLoading(true);
        try{
            const {data, status} = await axios.get(url)
            console.log(data,status,"RAEES",'useFetch')
            if(data && status==200 ){
                setData(data)
                setError('')
            }
        }
        catch(error){
            setData([]);
            setError(error.message)
        }
        setLoading(false)
    }

  return { data, loading ,error, reFetch}
}


const useFetchFunction = ()=>{
    const fetchData = async ({url,method,payload})=>{
        try{
            let sp_id =  localStorage.getItem('sp_id');
            let customer_id = localStorage.getItem('customer_id');
            let headers = {}
            if(sp_id){
            const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
             headers = { Authorization: `Bearer ${token}`  };      
            }
            if (customer_id){
                const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
                headers = { Authorization: `Bearer ${token}`  };     
            }
            const axiosRequest = {
                method:method?.toLowerCase()==='get' ? "GET" : "POST",
                url,
                headers : headers,

            }
               
            const {status,data} = await axios({...axiosRequest, data: method?.toLowerCase()==="post" && payload})

            if(data && status ==200){
                return {isSuccess:true,data}
            }
        }
        catch(error){
            return {isSuccess:false, error:error.message}
        }
    }
    return {
        fetchData
    }
}

const useCustomerFetchFunction = ()=>{
    const fetchCustomerData = async ({url,method,payload})=>{
        try{
            let sp_id =  localStorage.getItem('sp_id');
            let customer_id = localStorage.getItem('customer_id');
            let headers = {}
            if(sp_id){
            const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
             headers = { Authorization: `Bearer ${token}`  }; 
             payload = {...payload, sp_id: sp_id}     
            }
            if (customer_id){
                const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
                headers = { Authorization: `Bearer ${token}`  };   
                let customer_email = localStorage.getItem('customer_email');
                payload = {...payload, email: customer_email}  
            }
            const axiosRequest = {
                method:method?.toLowerCase()==='get' ? "GET" : "POST",
                url,
                headers : headers,

            }
               console.log("ln 83 axios request", axiosRequest)
            const {status,data} = await axios({...axiosRequest, data: method?.toLowerCase()==="post" && payload})

            if(data && status ==200){
                return {isSuccess:true,data}
            }
        }
        catch(error){
            return {isSuccess:false, error:error.message}
        }
    }
    return {
        fetchCustomerData
    }
}
export {useFetch,useFetchFunction,useCustomerFetchFunction}