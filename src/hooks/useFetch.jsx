import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { CircularProgress, Dialog, Skeleton, ThemeProvider, createTheme } from '@mui/material';
import SkeletonLoading from 'components/common/Skeleton';
import { globalAppTheme } from 'components/common/Themes/GlobalAppTheme';

const theme = createTheme(globalAppTheme,{
    components: {
      MuiAlert: {
        styleOverrides: {
          root: {
            backgroundColor: "white", // Replace with your desired background color,
            color:"black",
            // border:'2px solid rgb(173,73,112)',
            fontSize:'22px',
            fontWeight:"500",
            minHeight:'100px',
            textAlign:'center',
            padding:'20px'
          }
        }
      }
    }
  });
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
                const token = localStorage.getItem('access_tokenSP'); // Retrieve the token from local storage
                 headers = { Authorization: `Bearer ${token}`  };      
                }
                const {data, status} = await axios.get(url,{headers})
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
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [loading, setLoading] = useState(false);

    const fetchData = async ({url,method,payload,noLoading,noSnackbar})=>{
        try{
            if(!noLoading)setLoading(true);
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
                if(!noSnackbar){
                    setSnackbarSeverity('success');
                    setSnackbarMessage(data.message);
                    setOpenSnackbar(true);
                    setTimeout(() => {
                      setOpenSnackbar(false);
                    }, 3000);
                }

                return {isSuccess:true,data}
            }
        }
        catch(error){
            if(!noSnackbar){
                setSnackbarSeverity('error');
                setSnackbarMessage(error.message);
                setOpenSnackbar(true);
            }

            return {isSuccess:false, error:error.message}
        }
        finally {
            if(!noLoading)setLoading(false);

        }
    }
    const loadingIndicator = loading ? <Dialog 
                                            open={true}
                                            PaperProps={{
                                                sx: {
                                                width: "200px",
                                                height: "100px",
                                                justifyContent:"center",
                                                alignItems:"center"
                                                }
                                            }}
                                            ><CircularProgress thickness={2} size="4rem"/>
                                        </Dialog> : null;

    return {
        fetchData,
        // Snackbar component
        snackbar: (
            <ThemeProvider theme={theme}>
            <Snackbar
            
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
             }}
            sx={{ height: "100%" }}
            open={openSnackbar}
            autoHideDuration={2000} // 2 seconds
            onClose={() => setOpenSnackbar(false)}
            >
            <Alert elevation={4} icon={false} severity='info'>{snackbarMessage}</Alert>
            </Snackbar>
            </ThemeProvider>
        ),
        loadingIndicator
        }
}

const useCustomerFetchFunction = ()=>{
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');
    const [loading, setLoading] = useState(false);
    const fetchCustomerData = async ({url,method,payload,noLoading,noSnackbar})=>{
        try{
            if(!noLoading)setLoading(true);
            // setLoading(true);
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
            const {status,data} = await axios({...axiosRequest, data: method?.toLowerCase()==="post" && payload})

            if(data && status ==200){
                if(!noSnackbar){
                    setSnackbarSeverity('success');
                    setSnackbarMessage(data.message);
                    setOpenSnackbar(true);
                    setTimeout(() => {
                    setOpenSnackbar(false);
                    }, 2000);
                }   
                return {isSuccess:true,data}
            }
        }
        catch(error){
            if(!noSnackbar){
                setSnackbarSeverity('error');
                setSnackbarMessage(error.message);
                setOpenSnackbar(true);
            }
            return {isSuccess:false, error:error.message}
        }
        finally {
            if(!noLoading)setLoading(false);

        }
        // finally {
        //     setLoading(false); // Set loading to false when the API call finishes
        //   }
          
    }
    const loadingIndicator = loading ? <SkeletonLoading/> : null;
    return {
        fetchCustomerData,
        // Snackbar component
        snackbar: (
            <ThemeProvider theme={theme}>
            <Snackbar
            
            anchorOrigin={{
                vertical: "top",
                horizontal: "center"
             }}
            sx={{ height: "100%" }}
            open={openSnackbar}
            autoHideDuration={2000} // 2 seconds
            onClose={() => setOpenSnackbar(false)}
            >
            <Alert elevation={4} icon={false} severity='info'>{snackbarMessage}</Alert>
            </Snackbar>
            </ThemeProvider>
        ),
        loadingIndicator
    }
}
export {useFetch,useFetchFunction,useCustomerFetchFunction}