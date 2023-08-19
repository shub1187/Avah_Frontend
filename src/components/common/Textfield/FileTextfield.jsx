import React from "react";
import { TextField,Input, Fab, Typography } from "@mui/material";
import FileUploadOutlined from "@mui/icons-material/FileUploadOutlined";
import { AddCircleOutlined } from "@material-ui/icons";
import NavigationIcon from '@mui/icons-material/Navigation';

const FileInputTextField = () => {

  return (
    // <Input
    //   fullWidth
    //   variant="outlined"
    // //   inputProps={{
    // //     multiple:true
    // //   }}
    // //   type="file"
    // />
<label htmlFor="upload-photo">
  <input
    style={{ display: 'none' }}
    id="upload-photo"
    name="upload-photo"
    type="file"
  />

  <Fab variant="extended" component="span" aria-label="add" sx={{justifyContent:"flex-end",borderRadius:'5px',backgroundColor:'white',boxShadow:'none',border:'1px solid rgb(196,196,196)',width:'350px',height:"60px"}}>
    <NavigationIcon sx={{ mr: 1 }} />
      UPLOAD
  </Fab>
  <br />
  <br />

  {/* <Fab color="primary" size="small" component="span" aria-label="add">
    <AddCircleOutlined />
  </Fab> */}


</label>
  )
};

export default FileInputTextField;