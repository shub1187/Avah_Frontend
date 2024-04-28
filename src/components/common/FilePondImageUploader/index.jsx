import { FilePond, File, registerPlugin } from 'react-filepond'

import 'filepond/dist/filepond.min.css'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import { useState } from 'react'
import { Button } from '@mui/material'

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

export const FilepondImageUploader = ()=>{
    const [files, setFiles] = useState([])
    console.log(files[0]?.file,files[0]?.getMetadata())

    const handleClick = ()=>{
        let formData = new FormData()
        files.length && files.map((file)=>formData.append('file',file.file))
        console.log(formData,files)
    }
    return (
      <div >
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={3}
          maxFileSize='1MB'
        //   server="/api"
          name="files" 
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <Button onClick={handleClick}>hhh</Button>
      </div>
    )
}