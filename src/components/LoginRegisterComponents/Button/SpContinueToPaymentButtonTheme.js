import { createTheme } from "@mui/material";

const SpContinueToPaymentButtonTheme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundColor:"black",
                    fontSize:"14px",
                    height:"45px",
                    width:"282px",
                    color:"white",
                    fontWeight:"700",
                    border: 'none',
                    borderRadius:"12px",
                    '&:hover': {
                        borderColor: 'transparent',
                        backgroundColor: 'grey',
                      },
                }
            }
        }
    }
})

export default SpContinueToPaymentButtonTheme