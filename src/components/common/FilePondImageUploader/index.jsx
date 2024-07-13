import { FilePond, File, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { useState } from 'react'
import { Alert, Button } from '@mui/material'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const FilepondImageUploader = ({files,setFiles, formData})=>{
    // const [files, setFiles] = useState([])
    const [alert,setAlert] = useState({alert:false,alertMessage:''})
    // console.log(files[0]?.file,files[0]?.getMetadata())
    const [formd,setFormd] = useState('')
    const validateFiles = (file)=>{
      if(file?.length){
        file?.map(({fileExtension, id, fileSize, fileName})=>{
          if(fileExtension ==='pdf' || fileExtension==='jpg' || fileExtension==='png' || fileExtension==='jpeg'){
            const size = Math.round((fileSize / 1024))
            if(size > 4120){
              setAlert((prev)=>({...prev,alert:true,alertMessage:`file ${fileName} too large , limit is 5 MB`}))
              setTimeout(()=>setAlert((prev)=>({...prev,alert:false})),2000)
            }
            else{
              // const formData =new FormData()
              let appendedFile = formData?.append('business_document',file)
              // for (var pair of formData.entries()) {
              //   console.log(pair[0]+ ', ' + pair[1]); 
              // }
              setFiles(appendedFile)
            }
          }
          else{
            setAlert((prev)=>({...prev,alert:true,alertMessage:'Invalid File Type Only PDF, JPEG, PGF, PNG are supported.'}))
            setTimeout(()=>setAlert((prev)=>({...prev,alert:false})),2000)
          }
        })
      }
    }
    // console.log(formd)
    // const handleClick = ()=>{
    //     const formData = new FormData();
    //     files.length && files.map((file)=>{console.log(file);formData.append('file',file.file)})
    //     // console.log(formData,files)
    //     setFormd(formData)
    // }
    return (
      <div >
        <FilePond
          
          files={files}
          onupdatefiles={(file)=>validateFiles(file)}
          // allowMultiple={true}
          // maxFiles={1}
          maxFileSize='1MB'
        //   server="/api"
          name="files" 
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        {alert?.alert && (<Alert severity='error' variant='outlined'>{alert?.alertMessage}</Alert>)}
        {/* <Button onClick={handleClick}>hhh</Button> */}
      </div>
    )
}

export default FilepondImageUploader