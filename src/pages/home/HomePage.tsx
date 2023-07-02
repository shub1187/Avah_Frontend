import React from 'react';

type Props = {};

const Homepage = (props: Props) => {
  return (
    <div>


<div className="dashboard-header">
          {/* ----------------total usage count -----------------*/}
          <div className="total-usage">

            <div className="col-md-12  col-xl-8  ps-2 pt-4">

              <div className="row p-0">
                <div className="col-xl-3 col-lg-3  col-6 p-0">
                  <div className="a-t2 d-t1-c"> Total Users</div>
                  <div className="a-t2 d-t2-c"> 15,000</div>
                </div>
                <div className="col-xl-3 col-lg-3  col-6  b-vr">
                  <div className="a-t2 d-t1-c"> Total Customers</div>
                  <div className="a-t2 d-t2-c"> 26,250</div>
                </div>
                <div className="col-xl-3  col-lg-3  col-6 b-vr ">
                  <div className="a-t2 d-t1-c "> Service Provider</div>
                  <div className="a-t2 d-t2-c"> 14,132</div>
                </div>
                <div className="col-xl-3 col-lg-3  col-6 b-vr ">
                  <div className="a-t2 d-t1-c"> Dealers</div>
                  <div className="a-t2 d-t2-c"> 20,132</div>
                </div>
              </div>

            </div>

          </div>

          {/* -----------------Request count-------------------- */}
          <div className='request'>

            <div className='request-title '>Pending Requests</div>


            <div className='row  d-flex align-items-center justify-content-center gx-0'>
              <div className="col-xl-8 col-lg-12   ">

                <div className="row row-space pt-3  pe-lg-2 req-card-txt">
                  <div className="col-lg-4 col-12 p-2 ">
                    <div className="request-card  d-flex align-items-center justify-content-center">
                      <div>
                      <img src={require("../../assets/img/sidebar/tick.png")} className="img d-img" alt='icon'/> 
                        <div> Verification Request</div>
                        <div> 2536 </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4  col-12   p-2">
                    <div className="request-card  d-flex align-items-center justify-content-center">
                      <div>
                      <img src={require("../../assets/img/sidebar/trequest.png")} className="img d-img" alt='icon'/> 

                        <div> Transfer Request</div>
                        <div> 2536 </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-4  col-12  p-2 ">
                    <div className="request-card  d-flex align-items-center justify-content-center">
                      <div>
                      <img src={require("../../assets/img/sidebar/supportreq.png")} className="img d-img" alt='icon'/> 
                        <div> Support Request</div>
                        <div> 2536 </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>



              <div className="col-xl-4 col-lg-9  pt-3">

              right side
              </div>


            </div>
        


          </div>

        </div>
      </div>
      
   
  );
};

export default Homepage;