import { Alert, Button, Snackbar } from '@mui/material'
import SkeletonLoading from 'components/common/Skeleton'
import {useFetch,useFetchFunction} from 'hooks/useFetch'
import React,{useEffect, useState} from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { ChangeStatusTableIcon } from 'assets/img/Table/TableIcons';
const StatusDialog = () => {
    const [status,setStatus] = useState({
        isVisible:false,
        message:"",
        loading:false,
        error:'',
        responseStatus:''
    })

    const [snackbar,handleSnackBar] = useState(true)
    console.log("RAEES",status.loading,status.error,snackbar)

    const {fetchData} = useFetchFunction()

    const handleSnackBarFunction = ()=>{
        handleSnackBar(false)
    }

    useEffect(()=>{
        if(!status.loading && status.error)handleSnackBar(true)
    },[status.error])
    const StatusUpdate = async()=>{
        try{
            setStatus({loading:true,message:'',isVisible:true})
            const payload = {
                status:'Active '  // Active or Inactive
            }
            const obj = {
                payload:payload,
                method:"POST",
                url:"https://my-json-server.typicode.com/raeesmohamed/mockjson/olympic?"
            }

            const {isSuccess,data,error} = await fetchData(obj)
            if(error && !isSuccess){
                throw new Error(error)
            }
            if(data && isSuccess){
                setStatus({loading:false,responseStatus:data?.status})  //status has bee nactiveated or status has been inactivated
            }

        }
        catch(error){
            setStatus({error:error?.message,message:'',loading:false})
        }
    }
    // if (status.loading) {
    //     return (
    //         <>
    //             <SkeletonLoading />
    //         </>
    //     )
    // }

    // if (status.error) {
    //     return (<Alert variant='contained' color='error' />)
    // }


    return (
        <>
            <Button onClick={StatusUpdate}>
                <ChangeStatusTableIcon />
            </Button>
            {status.loading && <SkeletonLoading />}
            {(!status.loading && status.error ) &&<Snackbar open={snackbar} autoHideDuration={1000} onClose={handleSnackBarFunction}  color='error'><Alert severity='error'>{status.error}</Alert></Snackbar>}
        </>
    )
}

export default StatusDialog