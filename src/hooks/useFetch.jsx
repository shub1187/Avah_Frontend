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
                let headers = {}
                if(sp_id){
                const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
                 headers = { Authorization: `Bearer ${token}`  };      
                }
                const {data, status} = await axios.get(url,headers)
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
            let headers = {}
            if(sp_id){
            const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
             headers = { Authorization: `Bearer ${token}`  };      
            }
            const axiosRequest = {
                method:method?.toLowerCase()==='get' ? "GET" : "POST",
                url,
                headers : headers,

            }
                payload = {...payload, sp_id: sp_id}
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
export {useFetch,useFetchFunction}