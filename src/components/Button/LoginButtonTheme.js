import { createTheme } from "@mui/material";

const LoginButtonTheme =(height,width)=>{
    return createTheme({
        components:{
            MuiButton:{
                styleOverrides:{
                    root:{
                        backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",
                        fontSize:"1rem",
                        height:height,
                        width:width,
                        color:"white",
                        fontWeight:"bold",
                        border: 'none',
                        '&:hover': {
                            borderColor: 'transparent',
                            backgroundColor: 'grey',
                          },
                    }
                }
            }
        }
    })
} 

export default LoginButtonTheme