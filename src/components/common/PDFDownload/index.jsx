import React from 'react'
import './index.scss'
import LabourEstimateTable from './components/labour_estimate_table'
import { spare_column } from './components/spare_column'
import { labour_column } from './components/labour_column'
import { Avatar, Box, Button, IconButton, TextField, Typography } from '@mui/material'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { mock } from './components/mock'
import UnderLine from '../Underline'
import AvahSideBarImage from 'assets/img/AvahSideBarImage.png'
const PDF = ({ spareData, labourData, rowData }) => {
  // let labourData = mock?.data?.labours
  // let spareData = mock?.data?.spares


  const calculateTotalAmount = (sparePayload, labourPayload) => {

    let TotalAmount = 0

    const addAmount = (payload) => {
      payload?.forEach((obj) => {
        if (obj.amount) {
          TotalAmount += parseFloat(obj.amount)
        }
      })
    }
    addAmount(sparePayload)
    addAmount(labourPayload)

    return TotalAmount
  }

  //LOGIC PULLED FROM HERE => https://stackoverflow.com/questions/55019343/how-to-generate-a-pdf-using-angular-7/59320184#59320184
  const generatePdf = () => {
    html2canvas(document.getElementById("pdf-download"), {
      allowTaint: true,
    }).then((canvas) => {
      let HTML_Width = canvas.width;
      let HTML_Height = canvas.height;
      let top_left_margin = 15;
      let PDF_Width = HTML_Width + top_left_margin * 2;
      let PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
      let canvas_image_width = HTML_Width;
      let canvas_image_height = HTML_Height;
      let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;
      canvas.getContext("2d");
      let imgData = canvas.toDataURL("image/jpeg", 1.0);
      let pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage([PDF_Width, PDF_Height], "p");
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }
      // IF YOU WANT TO SAVE => UNCOMMENT BELOW CODE
      pdf.save(`${localStorage.getItem('profile_name')} Receipt.pdf`);

      // CONVERTS INSTANCE TO BLOB AND THEN CREATE BLOB URL
      // const pdfBlob = pdf.output("blob");
      // const pdfBlobUrl = URL.createObjectURL(pdfBlob);

      // SET BLOB URL SO THAT IT CAN BE PASSED AS SRC TO IFRAME
      // setPdf(pdfBlobUrl);
      // setOpen(true);
    });
  };

  return (
    <>
      <IconButton color='options' onClick={generatePdf}>
        <Box className='flex ai-flex-start jc-center column'>
          <Typography fontSize={9}>PDF</Typography>
          <PictureAsPdfIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
        </Box>
      </IconButton>

      <div className="hide-pdf-component">
        <div id='pdf-download'>
          <Box padding={10}>
            <Avatar  sx={{ width: "70%",
              borderRadius:"0",height:'65px'
            
            }} src={AvahSideBarImage} />
          </Box>
          <Box className='flex mb-4'>
            <Box className='width-half'>
              <Typography mb={1} fontWeight={'bold'}>Vehicle Details<UnderLine /></Typography>
              <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>
                  <Box>Vehicle Number</Box>
                  <Box >Model</Box>
                  <Box >Manufacturer</Box>
                  <Box >Vehicle Type</Box>
                  <Box>KM Driven</Box>
                </Box>
                <Box>
                  <Box>: {rowData?.vehicle_number}</Box>
                  <Box >: {rowData?.model}</Box>
                  <Box >: {rowData?.brand}</Box>
                  <Box >: {rowData?.fuel_type}</Box>
                  <Box>: {rowData?.kilometers_driven}</Box>
                </Box>
              </Box>
            </Box>
            <Box className='width-half'>
              <Typography mb={1} fontWeight={'bold'}>Customer Details<UnderLine /></Typography>
              <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>
                  <Box>Name</Box>
                  <Box >Pickup Address</Box>
                  <Box >Mobile</Box>
                  <Box >Email</Box>
                  <Box >Payment Status</Box>
                  <Box >Payment Method</Box>
                </Box>
                <Box>
                  <Box>: {rowData?.name}</Box>
                  <Box >: {rowData?.pickup_address}</Box>
                  <Box >: {rowData?.mobile_number}</Box>
                  <Box >: {rowData?.email}</Box>
                  <Box >: {rowData?.payment_status}</Box>
                  <Box >: {rowData?.payment_method}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className='flex mb-4'>
            <Box className='width-half'>
              <Typography mb={1} fontWeight={'bold'}>Appointment Details<UnderLine /></Typography>
              <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>
                  <Box>Appointment Status</Box>
                  <Box >Appointment Time</Box>
                  <Box >Appointment Date</Box>
                </Box>
                <Box>
                  <Box>: {rowData?.appointment_status}</Box>
                  <Box >: {rowData?.appointment_time}</Box>
                  <Box >: {rowData?.appointment_date}</Box>
                </Box>
              </Box>
            </Box>
            {rowData?.advisor_name && (
              <Box className='width-half'>
                <Typography mb={1} fontWeight={'bold'}>Employees Details<UnderLine /></Typography>
                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                  <Box className='mr-3'>
                    <Box>Advisor</Box>
                    <Box >Technicians</Box>
                  </Box>
                  <Box>
                    <Box>: {rowData?.advisor_name}</Box>
                    <Box >: {rowData?.technician_name?.map((name) => name + ", ")}</Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
          <Box className='flex mb-3'>
            <Box className='width-half'>
              <Typography mb={1} fontWeight={'bold'}>Estimate/JobCard Details<UnderLine /></Typography>
              <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>
                  <Box>Estimate Date</Box>
                  <Box >Estimate Created By</Box>
                  <Box >Jobcard Created By</Box>
                  <Box >Jobcard Opened On</Box>
                  {rowData?.estimate_rejection_note && <Box >Estimate Rejection Note</Box>}
                  {rowData?.cust_cancellation_note && <Box >Customer Cancellation Note</Box>}
                  {rowData?.sp_cancellation_note && <Box >Service Provider Cancellation Note</Box>}
                  {rowData?.sp_rejection_note && <Box >Service Provider Rejection Note</Box>}
                </Box>
                <Box>
                  <Box>: {rowData?.estimate_approval_or_rejection_date}</Box>
                  <Box >: {rowData?.estimate_created_by}</Box>
                  <Box >: {rowData?.jobcard_created_by}</Box>
                  <Box >: {rowData?.jobcard_opened_on}</Box>
                  {rowData?.estimate_rejection_note && <Box >: {rowData?.estimate_rejection_note}</Box>}
                  {rowData?.cust_cancellation_note && <Box >: {rowData?.cust_cancellation_note}</Box>}
                  {rowData?.sp_cancellation_note && <Box >: {rowData?.sp_cancellation_note}</Box>}
                  {rowData?.sp_rejection_note && <Box >: {rowData?.sp_rejection_note}</Box>}
                </Box>
              </Box>
            </Box>
            <Box className='width-half'>
              <Typography mb={1} fontWeight={'bold'}>Invoice Details<UnderLine /></Typography>
              <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>
                  <Box>Invoice Amount</Box>
                  <Box>Invoice Collected By</Box>
                  <Box>Invoice Created By</Box>
                  <Box >Job Completed On</Box>
                </Box>
                <Box>
                  <Box>: {rowData?.invoice_amount}</Box>
                  <Box>: {rowData?.invoice_collected_by}</Box>
                  <Box>: {rowData?.invoice_created_by}</Box>
                  <Box>: {rowData?.service_completed_on}</Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <LabourEstimateTable data={spareData} column={spare_column} title={'Spares'} />
          <LabourEstimateTable data={labourData} column={labour_column} title={'Labour'} />
          <Box className='flex jc-flex-end ai-center'>
            <Box className='flex jc-flex-end ai-center'>
              <Box className='bold' >Grand Total = </Box>
              <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
              <Box className='mr-4 textfield-grey-background'>
                <TextField
                  size='small'
                  disabled
                  value={
                    calculateTotalAmount(spareData, labourData)
                  }
                />
              </Box>
            </Box>
          </Box>
        </div>

      </div>

    </>
  )
}

export default PDF