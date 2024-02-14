import React from 'react'
import './index.scss'
import LabourEstimateTable from './components/labour_estimate_table'
import { spare_column } from './components/spare_column'
import { labour_column } from './components/labour_column'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { mock } from './components/mock'
const PDF = ({ data }) => {
  let labourData = mock?.data?.labours
  let spareData = mock?.data?.spares


  const calculateTotalAmount = (sparePayload, labourPayload) => {

    let TotalAmount = 0

    const addAmount = (payload) => {
      payload.forEach((obj) => {
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
      {/* <Button
          onMouseEnter={generatePdf}
          variant="contained"
          color={'options'}
        > */}
      <IconButton color='options' onClick={generatePdf}>
        <Box className='flex ai-flex-start jc-center column'>
          <Typography fontSize={9}>PDF</Typography>
          <PictureAsPdfIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
        </Box>
      </IconButton>

      {/* </Button> */}
      <div className="hide-pdf-component">
        <div id='pdf-download'>
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