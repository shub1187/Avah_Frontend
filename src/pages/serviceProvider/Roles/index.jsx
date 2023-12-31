import { Box, Button, Checkbox, TextField } from '@mui/material'
import { SpRolesColumn } from 'pages/serviceProvider/Roles/Components/SpRolesColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useState} from 'react'
import './index.scss'
import { useFetchFunction } from 'hooks/useFetch';
import URL from 'url/apiURL';

const {addEmployeeRole,getAllEmployeeRoles} = URL.SERVICE_PROVIDER.ROLE
const checkboxList = [
  { name:'Roles'},
  { name:'Spares'},
  { name:'Labour'},
  { name:'Service'},
  { name:'Service Type'},
  { name:'Accounts'},
  { name:'Billing'},
  { name:'Finance'},
  { name:'Packages'},
  { name:'Reviews'},
  { name:'Settings'}
]

const SpRolesPage = () => {

  const [page,setPage] = useState('table')
  const [roleInfo,setRoleInfo] = useState({})
  const {snackbar,loadingIndicator,fetchData} = useFetchFunction()

  const setCheckboxes = (e,index)=>{
    if(e.target.checked){
      setRoleInfo((prev)=>({...prev,permissions:{...roleInfo.permissions,[checkboxList[index].name]:true}}))
    }
    else{
      setRoleInfo((prev)=>({...prev,permissions:{...roleInfo.permissions,[checkboxList[index].name]:false}}))
    }
  }

  const handleSubmit = async()=>{
    const payload = {
      role_name:roleInfo.role,
      permission_granted:Object.keys(roleInfo.permissions).filter(permission=>roleInfo.permissions[permission] )
    }
    const obj = {
      method:'POST',
      payload,
      url:addEmployeeRole
    }
    await fetchData(obj)
    setRoleInfo({})
  }

  if(page ==='addRole'){
    return(
      <Box>
        <Box className='flex jc-space-between'>
          <Box className='role-body'>
            <Box className='role-title'>ROLE NAME</Box>
            <Box className='role-textfield'><TextField value={roleInfo.role || ''} onChange={(e)=>setRoleInfo((prev)=>({...prev,role:e.target.value}))} size='small'/></Box>
          </Box>
          <Box>
            <Box><Button variant='outlined' color='options' onClick={()=>setPage('table')}>BACK <ArrowBackIcon /></Button></Box>
          </Box>
        </Box>
        <Box className='grey-container'>
          <Box className='permission-title'>PERMISSION</Box>
          <Box className='flex jc-space-between wrap'>{checkboxList.map((checkbox,index)=>{
            return (<Box className='flex mr-4 ai-center' key={index}>
                      <Box><Checkbox onClick={(e)=>setCheckboxes(e,index)} className='checkbox'/></Box>
                      <Box className='checkbox-name'>{checkbox.name}</Box>
                    </Box>)
          })}</Box>
          <Box className='flex jc-center'><Button disabled={!Object.keys(roleInfo).length} className='mt-2 mb-2' color='options' variant='contained' onClick={handleSubmit}>SUBMIT</Button></Box>
        </Box>
        {snackbar}
        {loadingIndicator}
      </Box>
    )
  }
  return (
    <ServiceProvidertable
        URL={getAllEmployeeRoles}
        columnss={SpRolesColumn}
        key={'roles'}
        buttonName={'ADD ROLE'}
        clickButton={()=>setPage('addRole')}
    />
  )
}

export default SpRolesPage