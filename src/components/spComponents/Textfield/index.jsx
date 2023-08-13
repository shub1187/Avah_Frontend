const createTextfield = (arr)=>
<>
    {arr.map((field)=>{

    if(!formField.hasOwnProperty(field.name)){
    setFormField((prev)=>({...prev,[field.name]:""}))
    }
    return(
        <Box mb={2}>
        <InputLabel sx={{color:"black",marginBottom:1}}>{field.label}</InputLabel>
        <TextField
        size='small'
        key={field.name}
        fullWidth={field.fullWidth}
        // label={field.label}
        value={formField[field.name] || ""}
        onChange={(e)=>handleChange(field.name,e.target.value)}
        />
        </Box>
    )})}
</>

export default createTextfield