import { useEffect, useState } from 'react'
import { getYear } from 'date-fns'
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, SPLoginAction } from './LoginAction';
import Loader from '../../components/common/Loader';
import { Box, Button, InputLabel, MenuItem, TextField, ThemeProvider, createTheme, CircularProgress } from '@mui/material';
import RegisterDialogForCustomer from 'components/LoginRegisterComponents/Dialog/RegisterDialogForCustomer/Index';
import RegisterDialogForServiceProviderAndDealers from 'components/LoginRegisterComponents/Dialog/RegisterDialogForServiceProviderAndDealer';
import SpRegisterAPI from 'url/SpRegisterAPI';
const theme = createTheme({
    components:{
        MuiTextField:{
            styleOverrides:{
                root:{
                    '& .MuiOutlinedInput-root': {
                        '& .MuiOutlinedInput-root': {
                            '& .MuiSelect-select': {
                              borderColor: 'lightgrey',
                            },
                        },
                        '&.Mui-disabled': {
                            '& fieldset': {
                              borderColor: 'lightgrey',
                            }
                        },
                        '& fieldset': {
                            borderColor: 'lightgrey',
                          },
                        '&.Mui-focused fieldset': {
                          borderColor: 'lightgrey',
                        },
                      },
            
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    backgroundColor: 'lightgrey',
                    fontSize:"11px",
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


function LoginComponent({role}) {
    const  loginState  = useSelector((state) => state.appState.login);

    const [loginDialogOpen,setLoginDialogOpen]= useState(false)
    const loginDialogOpenFunction = ()=>{
        setLoginDialogOpen(false)
    }
    const [serviceProviderAndDealersLoginDialogOpen,setServiceProviderAndDealersLoginDialogOpen]= useState(false)
    const serviceProviderAndDealersLoginDialogOpenFunction = ()=>{
        setServiceProviderAndDealersLoginDialogOpen(false)
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(loginDialogOpen,"RAEES")
    const businessTypes = [
        'Sole Proprietorship',
        'Partnership',
        'Limited Liability Partnership',
        'Private Limited Companies',
        'Public Limited Companies',
        'One-Person Companies',
        'Section 8 Company',
        'Joint-Venture Company',
      ];
      
    const [spName, setSpName] = useState("")
    const [spEmail, setSpEmail] = useState("")
    const [spPassword, setSpPassword] = useState("")
    const [spRePassword, setSpRePassword] = useState("")
    const [spBusinessName, setSpBusinessName] = useState("")
    const [spBusinessContactNumber, setSpBusinessContactNumber] = useState("")
    const [spBusinessAddress, setSpBusinessAddress] = useState("")
    const [spBusinessType, setSpBusinessType] = useState(''); // Set "Vendor" as the default value
    const goToLoginPageButtonAfterRegister=()=>{
        setSignUp(false);
    }
    const [signUp,setSignUp] = useState(false)

    const [error, setErrorMessage] = useState("")
    const [errory,setErrory] = useState(false)



    const [page, SetPage] = useState("admin")
    console.log(spName,spEmail,spPassword,spRePassword,spBusinessName,spBusinessType,spBusinessContactNumber,spBusinessAddress,page,'RAEES')
    useEffect(()=>{
        let vam = setTimeout(()=>setErrory(false),2000)

        return()=>clearTimeout(vam)
    },[errory])
    const dispatch = useDispatch()
    const [setLoader, bindLoader, closeLoader] = Loader('')
    useEffect(() => {

       if(loginState.isLoading==1 ){
        closeLoader()
       }else{
        if(loginState.isLoading==0)
       { setLoader()}
       }
    
      }, [loginState.isLoading]);
    // const loginButton = (e) => {
    //   }, [loginState.isLoading]);
    const loginButton = () => {


        // console.log("buttonlicnaksdnkajs")
        if (email.length <= 0) {
            setErrory(true)
        } else if (password.length <= 0) {
            setErrory(true)
        } else {
            console.log("LoginActionPAge")
            setErrorMessage("")
            setEmail("")
            setPassword("")
            let body={"username":email,"password":password,"role":"admin"}
            dispatch(LoginAction(body))
        }

    }

    const spLoginButton = () => {
        // console.log("buttonlicnaksdnkajs")
        if (spEmail.length <= 0) {
            setErrorMessage("Enter email id")
        } else if (spPassword.length <= 0) {
            setErrorMessage("Enter password")
        }
        // else if(spBusinessName.length <=0){
        //     setErrorMessage("Enter Buisness Name")
        // }
        // else if(spBusinessContactNumber.length <=0){
        //     setErrorMessage("Enter Buisness Contact Number")
        // }
        else {
            console.log("LoginActionPAge")
            setErrorMessage("")
            setSpEmail("")
            setSpPassword("")
            let body={"email":spEmail,"password":spPassword,"role":page}
            dispatch(SPLoginAction(body))
        }
    }


    const currentDate = new Date();
    const currentYear = getYear(currentDate);
    return (
        <div>
            <ThemeProvider theme={theme}>
            <div className="home-page login-page ">
                <section className="login-form">
                    <div className="container-fluid">
                        <header id="header">
                            <nav className="navbar navbar-expand-lg">
                                <a className="navbar-brand-trans" href="#">
                                    <img src={require("../../assets/img/logo.png")} className="logo pl-3" alt="pic" /></a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-0 mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className={'nav-link active'} aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">How We Work</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Services
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Providers</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link">Blogs</a>
                                        </li>

                                    </ul>

                                </div>
                            </nav>

                        </header>
                        {/* <!-- End Header --> */}
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="login-form-left m-auto">
                                    <div className="d-flex justify-content-center align-items-center mt-">
                                        <div className="card">
                                            <div className="tab-content" id="pills-tabContent">
                                                    <>
                                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                        aria-labelledby="pills-home-tab">
                                                        <div className="col-12 intro text-center">
                                                            <h2>Welcome Admin</h2>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-12">
                                                                <p>Enter your email and password to sign in</p>
                                                            </div>
                                                            <Box mb={10}></Box>
                                                        {/* <div className="col-12">
                                                            <label htmlFor="Name" className="form-label">Name</label>
                                                            <input type="text" placeholder="Enter Your Name"
                                                             className="inputfield" id="inputPassword4"
                                                             value={spName} onChange={(e) => {
                                                                setSpName(e.target.value)
                                                            }}
                                                             />
                                                        </div> */}
                                                        <Box mb={2}>
                                                                <InputLabel sx={{color:"black",marginBottom:1}}>Email</InputLabel>
                                                                <TextField 
                                                                    fullWidth
                                                                    size='small'
                                                                    placeholder='Enter Your Email ID'
                                                                    onChange={(e) => {
                                                                        setEmail(e.target.value)
                                                                    }}
                                                                    value={email}
                                                                    type="email"
                                                                    id='inputEmailSp'
                                                                    error={errory && !email.length?true:false}
                                                                    helperText={errory && !email.length?"Email Required":""}
                                                                />
                                                            </Box>
                                                            <Box mb={2}>
                                                                <InputLabel sx={{color:"black",marginBottom:1}}>Password</InputLabel>
                                                                <TextField 
                                                                    fullWidth
                                                                    size='small'
                                                                    placeholder='Enter Your Password'
                                                                    onChange={(e) => {
                                                                        setPassword(e.target.value)
                                                                    }}
                                                                    value={password}
                                                                    type='password'
                                                                    id='inputPassword4'
                                                                    error={errory && !password.length?true:false}
                                                                    helperText={errory && !password.length?"Password Required":""}
                                                                />
                                                            </Box>
                                                        {/* <div className="col-12">
                                                            <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                                                            <input type="password" placeholder="Re-enter Your Password" className="inputfield"
                                                                id="inputPassword4" value={spRePassword} onChange={(e) => {
                                                                    setSpRePassword(e.target.value)
                                                                }} />
                                                        </div> */}
                                                            <Box sx={{display:"flex",justifyContent:"space-between"}} className="col-12">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                                    <label className="form-check-label" htmlFor="gridCheck">
                                                                        Remember Me
                                                                    </label>
                                                                </div>
                                                                <a style={{textDecoration:"none",cursor:"pointer"}}>
                                                                    Forgot Password?
                                                                </a>
                                                            </Box>
                                                            <div className="errorMessage my-2 ">
                                                                {error}
                                                            </div>
                                                            <div className="col-12 text-center">

                                                                <button
                                                                    onClick={() => { loginButton() }}
                                                                    type="submit"
                                                                    className="btn btn-login mt-4 mb-4">Login</button>

                                                            </div>
                                                        </div>
                                                    </div>
                                                    </> 

                                                
                                                <div className="tab-pane fade" id="pills-dealer" role="tabpanel" aria-labelledby="pills-dealer-tab">
                                                    <form className="row">
                                                        <div className="col-12 intro text-center">
                                                            <h2>Welcome Back</h2>
                                                            <h4>Sign in Via</h4>
                                                            <div className="social-links text-center text-md-right pt-3 pt-md-0">
                                                                <a href="#" className="twitter"><i className="bi bi-facebook"></i></a>
                                                                <a href="#" className="twitter"><i className="bi bi-apple"></i></a>
                                                                <a href="#" className="facebook"><i className="bi bi-google"></i></a>
                                                            </div>
                                                            <h4>or</h4>
                                                        </div>
                                                        
                                                        <div className="col-12">
                                                            <label htmlFor="Name" className="form-label">Name</label>
                                                            <input type="password" placeholder="Enter Your Name" className="form-control"  />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                                            <input type="email" placeholder="Enter Your Email ID" className="form-control" id="inputEmail4"
                                                            />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputPassword" className="form-label">Password</label>
                                                            <input type="password" placeholder="Re-enter Your Password" className="form-control"
                                                               />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                                                            <input type="password" placeholder="Re-enter Your Password" className="form-control"
                                                                 />
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                                <label className="form-check-label" htmlFor="gridCheck">
                                                                    Remember me
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12 text-center">
                                                            <a href="service-provider-dealer.html"><button type="submit"
                                                                className="btn btn-login mt-4 mb-4">Register</button></a>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>

                                        </div>
                                        {/* {loginDialogOpen ? <RegisterDialogForCustomer goToLoginPageButtonAfterRegister={goToLoginPageButtonAfterRegister} loginDialogOpenFunction={loginDialogOpenFunction}/>:null}                
                                        {serviceProviderAndDealersLoginDialogOpen ? <RegisterDialogForServiceProviderAndDealers goToLoginPageButtonAfterRegister={goToLoginPageButtonAfterRegister} loginDialogOpenFunction={serviceProviderAndDealersLoginDialogOpenFunction} />:null}       */}
                                    </div>
                                </div>
                                <footer id="footer">
                                    <nav className="navbar mt-5  fix-bottom-footer">
                                        <div className="copyright"> © {currentYear} Made with Love By <span className="pink-text">AVAH Services</span> </div>
                                        <div className="footer-navlinks">
                                            <ul className="nav justify-content-center">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">About Us</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Terms & Conditions</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">FAQ’s</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Privacy Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </footer>
                                {/* <!-- End footer --> */}
                            </div>
                            {/* <!-- End col-md-6 --> */}

                            <div className="col-lg-6 col-md-5 login-form-bg  d-flex justify-content-center align-items-center p-0 m-0">
                                <a className="navbar-brand d-flex justify-content-center align-items-center" href="#"><img
                                    src={require("../../assets/img/avah_tranparent .png")} className="logo" alt="pic" /></a>
                            </div>
                            {/* <!-- End col-md-6 --> */}
                        </div>
                    </div>
                    {/* <!-- End container --> */}
                </section>
                {/* <!-- Vendor JS Files -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <!-- Template Main JS File --> */}
            </div>
                {/* {bindLoader()} */}
                </ThemeProvider>
        </div>
    )
}

export default LoginComponent
