import React from 'react'

export default function AppBarComponent() {
    return (
        <div  >
            <nav className="ps-4 pt-4 ">

                <ol className="breadcrumb  pt-0 m-0 ">
                    <li className="breadcrumb-item mb-0 a-t "><a  className="a-t" href="#">Pages</a></li>
                    <li className="breadcrumb-item  a-t" aria-current="page">Dashboard</li>
                </ol>

                <div className="container-fluid g-0">

                    <div className="row">

                        <div className="col-auto me-auto">
                           <div className=' a-t2'>Dashboard</div>
                        </div>

                        <div className="col-auto"><ul className="nav nav-contianer">
                            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Login</a></li>
                            <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Sign up</a></li>
                        </ul></div>
                    </div>



                </div>
            </nav>

        </div>
    )
}
