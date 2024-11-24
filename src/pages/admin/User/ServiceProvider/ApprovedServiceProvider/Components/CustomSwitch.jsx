import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import URL from 'url/apiURL';
import { useFetchFunction } from 'hooks/useFetch';
import SkeletonLoading from 'components/common/Skeleton';
import { globalAppTheme } from 'components/common/Themes/GlobalAppTheme';
import { useCustomMaterialTableContext } from 'components/common/Table/MaterialTable';

const theme = createTheme(globalAppTheme,{
    components: {
      MuiSwitch: {
        styleOverrides: {
          switchBase: {
            // Controls default (unchecked) color for the thumb
            color: "#d32f2f"
          },
          colorPrimary: {
            "&.Mui-checked": {
              // Controls checked color for the thumb
              color: "#2e7d32"
            }
          },
          track: {
            // Controls default (unchecked) color for the track
            opacity: 0.2,
            backgroundColor: "#f96262",
            ".Mui-checked.Mui-checked + &": {
              // Controls checked color for the track
              opacity: 0.7,
              backgroundColor: "#70b674"
            }
          }
        }
      }
    }
  });

const {updateServiceProviderActive} = URL.ADMIN.USER.SERVICEPROVIDER

export const CustomSwitch = ({rowData})=>{
    const [checked, setChecked] = useState(rowData?.sp_status==='Active'?true:false);
    const [state,setState] = useState({popupOpen:false,loading:false,status:true})
    const {fetchData,snackbar, loadingIndicator} = useFetchFunction()
    const {tableRef} = useCustomMaterialTableContext()

    const callUpdateServiceProviderActive = async()=>{
        
        const {data,isSuccess} = await fetchData({url:updateServiceProviderActive,method:'POST',payload:{'sp_status':rowData?.sp_status==='Active'?'Inactive':'Active','sp_id':rowData?.sp_id}})
        if(data && isSuccess){
            setChecked((prev)=>(!prev))
            setState((prev)=>({...prev,popupOpen:false}))
            tableRef.current && tableRef.current.onQueryChange()
        }

    }
    const changeSwitch = (checked)=>{
        setState((prev)=>({...prev,popupOpen:true}))

    }

    const no = ()=>{
        setState((prev)=>({...prev,popupOpen:false}));
    }
    return (
        <ThemeProvider theme={theme}>
            <Switch
            defaultChecked={rowData?.sp_status==='Active'?true:false}
            checked={checked}
            onChange={({ target: { checked } }) =>changeSwitch(checked)}
            />
            {state?.popupOpen && (
                (<Dialog open={state?.popupOpen}>
                    <DialogTitle>Are you sure you want to {rowData?.sp_status==='Active'?'disable':'enable'} {rowData.name}</DialogTitle>
                    <DialogContent>
                        {state?.loading ?  <SkeletonLoading/>:<></>}
                        {state?.status ? <>Status Updated</>:<></>}
                    </DialogContent>
                    <DialogActions>
                        <Button color='options' variant="outlined" onClick={no}>No</Button>
                        <Button color='options' variant='contained' onClick={callUpdateServiceProviderActive}>Yes</Button>
                    </DialogActions>
                </Dialog>)
            )}
            {snackbar}
            {loadingIndicator}
        </ThemeProvider>

    )
  }
