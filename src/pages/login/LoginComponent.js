import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction, SPLoginAction } from './LoginAction';
import Loader from '../../components/common/Loader';

 
  
function LoginComponent() {
    const  loginState  = useSelector((state) => state.appState.login);


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [spName, spSetName] = useState("")
    const [spEmail, spSetEmail] = useState("")
    const [spPassword, spSetPassword] = useState("")
    const [spRePassword, spSetRePassword] = useState("")




    const [error, setErrorMessage] = useState("")



    const [page, SetPage] = useState("customer")

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
    const loginButton = () => {


        // console.log("buttonlicnaksdnkajs")
        if (email.length <= 0) {
            setErrorMessage("Enter email id")
        } else if (password.length <= 0) {
            setErrorMessage("Enter password")
        } else {
            console.log("LoginActionPAge")
            setErrorMessage("")
            let body={"username":email,"password":password}
            dispatch(LoginAction(body))
        }
    }



    const spLoginButton = () => {


        // console.log("buttonlicnaksdnkajs")
        if (spEmail.length <= 0) {
            setErrorMessage("Enter email id")
        } else if (spPassword.length <= 0) {
            setErrorMessage("Enter password")
        } else {
            console.log("LoginActionPAge")
            setErrorMessage("")
            let body={"email":spEmail,"password":spPassword}
            dispatch(SPLoginAction(body))
        }
    }

    return (
        <div>

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
                                        <li className="nav-item">
                                            <a className="nav-link signup-btn">SIGN UP</a>
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
                                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                <li className="nav-item text-center">
                                                    <a className={`nav-link  ${page=="customer" ? "active" : ""} btl`} id="pills-home-tab" data-toggle="pill" 
                                                     role="tab"  href="#pills-home"
                                                        aria-controls="pills-home" aria-selected="false" onClick={()=>{SetPage("customer")}}>Customer</a>
                                                </li>
                                                <li className="nav-item text-center">
                                                    <a className={`nav-link  ${page=="Service Provider" ? "active" : ""} btr`} id="pills-profile-tab"
                                                     data-toggle="pill" role="tab" href="#pills-profile"
                                                        aria-controls="pills-profile" aria-selected="false" onClick={()=>{SetPage("Service Provider")}}> Service Provider</a>
                                                </li>
                                               

                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                               
                                                {
                                                page=="customer" ?  <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                                                aria-labelledby="pills-home-tab">
                                                <div className="col-12 intro text-center">
                                                    <h2>Welcome Back</h2>
                                                    <h4 className="mt-2 mb-2 w-100">Sign in Via</h4>
                                                    <div className="social-links text-center text-md-right pt-3 pt-md-0 mt-2 mb-2">
                                                        <a href="#" className="twitter"><i className="bi bi-facebook"></i></a>
                                                        <a href="#" className="apple"><i className="bi bi-apple"></i></a>
                                                        <a href="#" className="facebook"><i className="bi bi-google"></i></a>
                                                    </div>
                                                    <h4 className="mt-2 mb-2 w-100">or</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <p>Enter your email and password to sign in</p>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                                        <input type="email" placeholder="Your Email" className="form-control" 
                                                            value={email} onChange={(e) => {
                                                                setEmail(e.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                                        <input type="password" placeholder="Your Password" className="form-control" 
                                                            value={password} onChange={(e) => {
                                                                setPassword(e.target.value)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                                                            <label className="form-check-label" htmlFor="gridCheck">
                                                                Check me out
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="errorMessage my-2 ">
                                                        {error}
                                                    </div>
                                                    <div className="col-12 text-center">

                                                        <button
                                                            onClick={() => { loginButton() }}
                                                            type="submit"
                                                            className="btn btn-login mt-4 mb-4">Register</button>

                                                    </div>
                                                </div>
                                            </div> : 
                                                
                                                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                                    <div className="row">
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
                                                            <input type="text" placeholder="Enter Your Name"
                                                             className="inputfield" id="inputPassword4"
                                                             value={spName} onChange={(e) => {
                                                                spSetName(e.target.value)
                                                            }}
                                                             />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                                                            <input type="email" placeholder="Enter Your Email ID" 
                                                            className="inputfield" id="inputEmail4"  value={spEmail} onChange={(e) => {
                                                                spSetEmail(e.target.value)
                                                            }} />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputPassword" className="form-label">Password</label>
                                                            <input type="password" placeholder="Re-enter Your Password" className="inputfield"
                                                             id="inputPassword4" value={spPassword} onChange={(e) => {
                                                                spSetPassword(e.target.value)
                                                            }} />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="inputPassword4" className="form-label">Confirm Password</label>
                                                            <input type="password" placeholder="Re-enter Your Password" className="inputfield"
                                                                id="inputPassword4" value={spRePassword} onChange={(e) => {
                                                                    spSetRePassword(e.target.value)
                                                                }} />
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
                                                            <button type="submit"
                                                                className="btn btn-login mt-4 mb-4"  onClick={() => { spLoginButton() }}>Register </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                }

                                                
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

                                    </div>
                                </div>
                                <footer id="footer">
                                    <nav className="navbar mt-5  fix-bottom-footer">
                                        <div className="copyright"> © 2021 Made with Love By <span className="pink-text">AVAH Services</span> </div>
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

                {bindLoader()}
        </div>
    )
}

export default LoginComponent
