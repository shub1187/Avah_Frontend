import { Box, Button, Card, Dialog, DialogContent, Grid, ThemeProvider, Typography } from "@mui/material";
import ServiceProviderDashboardIconCards from "components/common/Cards/HomePageCards/ServiceProviderDashboardIconCards";
import SpLatestActivityCard from "components/common/Cards/HomePageCards/SpLatestActivityCard";
import SpQuickPayment from "components/common/Cards/HomePageCards/SpQuickPayment";
import SpRating from "components/common/Cards/HomePageCards/SpRating";
import SpRevenueSingleCard from "components/common/Cards/HomePageCards/spRevenueSingleCard";
import { useMobileResponsive } from "hooks/useMobileResponsive";
import ApexCharts from "pages/serviceProvider/Home/Components/charts";
import serviceProviderHomeTheme from "pages/serviceProvider/Home/Components/theme";
import createJobCardIcon from 'assets/img/serviceProviderDashboard/createJobCardIcon.png'
import workInprogressIcon from 'assets/img/serviceProviderDashboard/workInprogressIcon.png'
import createInvoiceIcon from 'assets/img/serviceProviderDashboard/createInvoiceIcon.png'
import serviceDueIcon from 'assets/img/serviceProviderDashboard/serviceDueIcon.png'
import pendingServicesIcon from 'assets/img/serviceProviderDashboard/pendingServicesIcon.png'
import totalCustomersIcon from 'assets/img/serviceProviderDashboard/totalCustomersIcon.png'
import SpRevenueSplitCard from "components/common/Cards/HomePageCards/spRevenueSplitCard";
import { useState } from "react";
import DialogWrapper from "components/common/Dialog/DialogWrapper";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import HandymanIcon from '@mui/icons-material/Handyman';
import { useNavigate } from "react-router-dom";
import { useCustomerContext } from "hooks/useCustomContext";
import URL from "url/apiURL";
import { useFetch } from "hooks/useFetch";
import UnderLine from "components/common/Underline";
// import './index.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SpAddLabourDialog from "../Labour/Components/AddLabour";
import SpCreateSpareDialog from "../Spares/Components/SpAddSparesDialog";
import BuildIcon from '@mui/icons-material/Build';
import SpCreateAppointmentDialog from "../Service/Appointment/Components/SpCreateAppointmentDialog";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptIcon from '@mui/icons-material/Receipt';

const { getStatistics} = URL.SERVICE_PROVIDER.HOME

const ServiceProviderHome = () => {
  const {isMobile} = useMobileResponsive()
  // const {data:statistics} = useFetch(getStatistics)
  const { onChange, subItemOnChange } = useCustomerContext()
  const navigate = useNavigate()

  const statistics = {
    "error": false,
    "data": {
      "employeeCount": "11",  
      "pendingInvoicesCount": "1", 
      "paidInvoicesCount": "2", 
      "totalBusinessSum": "41416", 
      "pendingBusinessSum": "9034.14",
      "pendingAppointmentCount": "3", 
      "rejectedAppointmentCount": "6" 
  }

}

return (
  <>
      <ThemeProvider theme={serviceProviderHomeTheme}>
          <Box sx={{ backgroundImage: "linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))" }} className='total-usage'>
              {!isMobile &&
                  <Box sx={{ display: "flex", justifyContent: "center", color: "white", fontWeight: "700" }}>
                      <Typography fontSize={"57.05px"}>WELCOME TO AVAH CAR SERVICE</Typography>
                  </Box>
              }
              <Box className='shortcut-container'>
                  <DialogWrapper title={'Add New Labour'} cardIcon={{ img: <ManageAccountsIcon />, text: 'Add New Labour' }}>
                    <SpAddLabourDialog/>
                  </DialogWrapper>
                  <DialogWrapper title={'Add New Spare'} cardIcon={{ img: <BuildIcon />, text: 'Add New Spare' }}>
                    <SpCreateSpareDialog/>
                  </DialogWrapper>
                  <DialogWrapper title={'Create Appointment'} cardIcon={{ img: <EventAvailableIcon />, text: 'Create Appointment' }}>
                    <SpCreateAppointmentDialog/>
                  </DialogWrapper>
                  <Box>
                      <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/serviceProvider/roles'); onChange(2) }}>
                          <Box className='container'>
                              <Box className='image'>
                                <AccountCircleIcon/>
                              </Box>
                              <Box className='text'>
                                View Roles
                              </Box>
                          </Box>
                      </Button>
                  </Box>
                  <Box>
                      <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/serviceProvider/billing/pendingPayments'); onChange(6) }}>
                          <Box className='container'>
                              <Box className='image'>
                                <EventNoteIcon className="purple"/>
                              </Box>
                              <Box className='text'>
                                View Billings
                              </Box>
                          </Box>
                      </Button>
                  </Box>
                  <Box>
                      <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/serviceProvider/service/estimatesList'); onChange(5) }}>
                          <Box className='container'>
                              <Box className='image'>
                                <CreditCardIcon className="purple"/>
                              </Box>
                              <Box className='text'>
                                View Estimate
                              </Box>
                          </Box>
                      </Button>
                  </Box>
              </Box>
          </Box>
          <Box m={3}>
              <Typography mb={1} variant='h5'>STATISTICS<UnderLine /></Typography>
              <Box className='statistics-main-container'>
                  <Box className='statistics-container'>
                      <Box className='left'>
                          <CheckCircleIcon className="green"/>
                      </Box>
                      <Box className='right'>
                          <Box className='count'>{statistics?.data?.paidInvoicesCount || 'N/A'}</Box>
                          <Box className='text'>Paid Invoice</Box>
                      </Box>
                  </Box>
                  <Box className='statistics-container'>
                      <Box className='left'>
                          <CancelIcon className="red"/>
                      </Box>
                      <Box className='right'>
                          <Box className='count'>{statistics?.data?.rejectedAppointmentCount || 'N/A'}</Box>
                          <Box className='text'>Rejected Appointment</Box>
                      </Box>
                  </Box>
                  <Box className='statistics-container'>
                      <Box className='left'>
                          <ErrorIcon className="orange"/>
                      </Box>
                      <Box className='right'>
                          <Box className='count'>{statistics?.data?.pendingAppointmentCount || 'N/A'}</Box>
                          <Box className='text'>Pending Appointment</Box>
                      </Box>
                  </Box>
              </Box>
              <Box className='counts-main-container'>
                  <Box className='custService-container'>
                      <Box className='customer'>
                          <Box className='left'>
                              <CurrencyRupeeIcon className="purple"/>
                          </Box>
                          <Box className='right'>
                              <Box className='count'>{statistics?.data?.totalBusinessSum || 'N/A'}</Box>
                              <Box className='text'>Total Revenue</Box>
                          </Box>
                      </Box>
                      <Box className='service-provider'>
                          <Box className='right'>
                              <Box className='count'>{statistics?.data?.pendingBusinessSum || 'N/A'}</Box>
                              <Box className='text'>Pending Payment</Box>
                          </Box>
                          <Box className='left'>
                              <CreditCardIcon className="purple"/>
                          </Box>
                      </Box>

                  </Box>
                  <Box className='approved-rej-container'>
                      <Box className='active'>
                          <Box className='left'>
                              <AccountCircleIcon className="purple"/>
                          </Box>
                          <Box className='right'>
                              <Box className='count'>{statistics?.data?.employeeCount || 'N/A'}</Box>
                              <Box className='text'>Total Employees</Box>
                          </Box>
                      </Box>
                      <Box className='rejected'>
                          <Box className='right'>
                              <Box className='count'>{statistics?.data?.getInactiveServiceProviderCount || 'N/A'}</Box>
                              <Box className='text'>Pending Invoices</Box>
                          </Box>
                          <Box className='left'>
                              <ReceiptIcon className="purple"/>
                          </Box>
                      </Box>
                  </Box>

              </Box>
          </Box>
      </ThemeProvider>
  </>

);
};

export default ServiceProviderHome;