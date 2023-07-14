import { createTheme } from "@mui/material";

const LoginButtonTheme = createTheme({
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",
                    fontSize:"1rem",
                    height:"46px",
                    width:"357px",
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

export default LoginButtonTheme