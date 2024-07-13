import { Box, Button, Dialog, DialogActions, DialogContent, IconButton, Typography } from "@mui/material"
import { useFetch } from "hooks/useFetch"
import { useEffect, useState } from "react"
import URLS from "url/apiURL"
import ArticleIcon from '@mui/icons-material/Article';
import axios from "axios";

const {getSpecificPendingSpDocument} = URLS.ADMIN.REQUESTS.PENDINGREQUESTS
const DocumentViewer = ({rowData,type}) => {

    // const { data } = useFetch(`${getSpecificPendingSpDocument}?${typeOfApi}=${typeOfApi ==='sp_id' ? rowData?.sp_id: rowData?.register_sp_id}`)

    const [open,setOpen] = useState(false)
    const [fileUrl, setFileUrl] = useState('');

    useEffect(()=>{
        if(open){
            const fetchDocument = async()=>{
                const typeOfApi = type==='pending'  || type==='rejected' ? 'register_sp_id' :'sp_id'
                try{
                    const token = localStorage.getItem('access_tokenSP');
                    const {data} = await axios.get(`${getSpecificPendingSpDocument}?${typeOfApi}=${typeOfApi ==='sp_id' ? rowData?.sp_id: rowData?.register_sp_id}`,{
                        responseType:'blob',
                        headers:{ Authorization: `Bearer ${token}`},
                    })
                    const url = URL.createObjectURL(new Blob([data?.response.data], { type: 'application/pdf' })); // Adjust MIME type as needed
                    setFileUrl(url)
                }
                catch{
        
                }
            }
            fetchDocument()
        }

    },[open])
  return (
    <>
        {!open ? 
            <IconButton color='options' onClick={() => { setOpen(true) }}>
                <Box className='flex ai-flex-start jc-center column'>
                    <Typography fontSize={9}> Document</Typography>
                    <ArticleIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                </Box>
            </IconButton>
            :
            <Dialog fullScreen fullWidth open={open}>
                <DialogContent>
                {fileUrl && (
                    <iframe
                    src={fileUrl}
                    width="600"
                    height="800"
                    title="File Viewer"
                    style={{ border: '1px solid black' }}
                    ></iframe>
                )}
                </DialogContent>
                <DialogActions>
                    <Button color="options" variant="contained" onClick={()=>setOpen(false)}>Close</Button>
                </DialogActions>
            </Dialog>
        }


    </>

  )
}

export default DocumentViewer