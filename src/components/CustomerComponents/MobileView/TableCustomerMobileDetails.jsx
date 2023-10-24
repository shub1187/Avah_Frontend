import { useCustomerFetchFunction, useFetchFunction } from 'hooks/useFetch'
import React, { useEffect, useState } from 'react'

const TableCustomerMobileDetails = ({URL}) => {

    const {fetchCustomerData} = useCustomerFetchFunction()
    const [data,setData]= useState([])
    useEffect(()=>{
        const {data} =fetchCustomerData({url:URL})
        setData(data)
    }
    ,[])
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default TableCustomerMobileDetails