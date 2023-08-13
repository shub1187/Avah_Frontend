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
                const {data, status} = await axios.get(url)
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
            if(data && status==200 && (data?.[0].httpCode ===200 ||data.httpCode ===200)){
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

export default useFetch