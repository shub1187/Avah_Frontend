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
import ModelAdminDialog from "../VehicleSettings/Models/Components/DialogModels";
import { useState } from "react";
import DialogWrapper from "components/common/Dialog/DialogWrapper";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import AddManufacturerDialog from "../VehicleSettings/Manufacturer/Components/DialogAddManufacturer";
import DialogFuelTypeAdmin from "../VehicleSettings/FuelType/Components/DialogFuelTypeAdmin";
import HandymanIcon from '@mui/icons-material/Handyman';
import { useNavigate } from "react-router-dom";
import { useCustomerContext } from "hooks/useCustomContext";
import URL from "url/apiURL";
import { useFetch } from "hooks/useFetch";
import UnderLine from "components/common/Underline";
import './index.scss'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const { getStatistics } = URL.ADMIN.HOME

export const AdminHomePage = () => {
    const { isMobile } = useMobileResponsive()
    const [dialog, setDialog] = useState({ modelDialog: true, manufacturerDialog: false, fuelTypeDialog: false })
    const { onChange, subItemOnChange } = useCustomerContext()
    const navigate = useNavigate()
    // const {data:statistics} = useFetch(getStatistics)
    const target = ['Approved Service Provider', 'Rejected Service Provider', 'Customer Count', 'Vehicle Count', 'Active Service Provider', 'Inactive Service Provider', 'Pending Service Provider']
    const statistics = {
        "error": false,
        "data": {
            "customerCount": "9",
            "approvedServiceProviderCount": "29",
            "rejectedServiceProviderCount": "6",
            "getAllVehiclesCount": "21",
            "getActiveServiceProviderCount": "25",
            "getInactiveServiceProviderCount": "4",
            "getPendingServiceProviderCount": "1"
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
                        <DialogWrapper title={'Add Models'} cardIcon={{ img: <DriveEtaIcon />, text: 'Add Models' }}>
                            <ModelAdminDialog />
                        </DialogWrapper>
                        <DialogWrapper title={'Add Manufacturer'} cardIcon={{ img: <EmojiTransportationIcon />, text: 'Add Manufacturer' }}>
                            <AddManufacturerDialog />
                        </DialogWrapper>
                        <DialogWrapper title={'Add Fuel'} cardIcon={{ img: <LocalGasStationIcon />, text: 'Fuel Type' }}>
                            <DialogFuelTypeAdmin />
                        </DialogWrapper>
                        <Box>
                            <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/admin/requests/pendingRequests'); onChange(3) }}>
                                <Box className='container'>
                                    <Box className='image'>
                                        <img src={pendingServicesIcon}></img>
                                    </Box>
                                    <Box className='text'>
                                        Pending Requests
                                    </Box>
                                </Box>
                            </Button>
                        </Box>
                        <Box>
                            <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/admin/user/customer'); onChange(1) }}>
                                <Box className='container'>
                                    <Box className='image'>
                                        <img src={totalCustomersIcon}></img>
                                    </Box>
                                    <Box className='text'>
                                        Total Customers
                                    </Box>
                                </Box>
                            </Button>
                        </Box>
                        <Box>
                            <Button className='card-icon-button' variant='contained' color='whiteBackground' onClick={() => { navigate('/admin/user/serviceProvider'); subItemOnChange(1); onChange(1) }}>
                                <Box className='container'>
                                    <Box className='image'>
                                        <HandymanIcon />
                                    </Box>
                                    <Box className='text'>
                                        Service Providers
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
                                <Box className='count'>{statistics.data.approvedServiceProviderCount || 'N/A'}</Box>
                                <Box className='text'>Approved Service Provider</Box>
                            </Box>
                        </Box>
                        <Box className='statistics-container'>
                            <Box className='left'>
                                <CancelIcon className="red"/>
                            </Box>
                            <Box className='right'>
                                <Box className='count'>{statistics.data.rejectedServiceProviderCount || 'N/A'}</Box>
                                <Box className='text'>Rejected Service Provider</Box>
                            </Box>
                        </Box>
                        <Box className='statistics-container'>
                            <Box className='left'>
                                <ErrorIcon className="orange"/>
                            </Box>
                            <Box className='right'>
                                <Box className='count'>{statistics.data.getPendingServiceProviderCount || 'N/A'}</Box>
                                <Box className='text'>Pending Service Provider</Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='counts-main-container'>
                        <Box className='custService-container'>
                            <Box className='customer'>
                                <Box className='left'>
                                    <AccountCircleIcon className="purple"/>
                                </Box>
                                <Box className='right'>
                                    <Box className='count'>{statistics.data.customerCount || 'N/A'}</Box>
                                    <Box className='text'>Customers</Box>
                                </Box>
                            </Box>
                            <Box className='service-provider'>
                                <Box className='right'>
                                    <Box className='count'>{statistics.data.getActiveServiceProviderCount || 'N/A'}</Box>
                                    <Box className='text'>Service Providers</Box>
                                </Box>
                                <Box className='left'>
                                    <ManageAccountsIcon className="purple"/>
                                </Box>
                            </Box>

                        </Box>
                        <Box className='approved-rej-container'>
                            <Box className='active'>
                                <Box className='left'>
                                    <CheckCircleIcon className="green"/>
                                </Box>
                                <Box className='right'>
                                    <Box className='count'>{statistics.data.getActiveServiceProviderCount || 'N/A'}</Box>
                                    <Box className='text'>Active Service Provider</Box>
                                </Box>
                            </Box>
                            <Box className='rejected'>
                                <Box className='right'>
                                    <Box className='count'>{statistics.data.getInactiveServiceProviderCount || 'N/A'}</Box>
                                    <Box className='text'>Inactive Service Provider</Box>
                                </Box>
                                <Box className='left'>
                                    <CancelIcon className="red"/>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    {/* <Grid container spacing={4}>
              <Grid item xs={12} >
                    <Grid spacing={2} container> */}
                    {/* {target.map((dat)=>
                            <Grid item>
                                <Box className='statistics-container'>
                                    <Box className='text'>{dat}</Box>
                                    <Box className='count'>{statistics.data.approvedServiceProviderCount}</Box>
                                </Box>
                            </Grid>
                        )} */}
                    {/* <Grid item>
                                <Box className='statistics-container'>
                                    <Box className='text'>Approved Service Provider</Box>
                                    <Box className='count'>{statistics.data.approvedServiceProviderCount}</Box>
                                </Box>
                            </Grid>                            
                            <Grid item>
                                <Box className='statistics-container'>
                                    <Box className='text'>Rejected Service Provider</Box>
                                    <Box className='count'>{statistics.data.rejectedServiceProviderCount}</Box>
                                </Box>
                            </Grid>                            
                            <Grid item>
                                <Box className='statistics-container'>
                                    <Box className='text'>Pending Service Provider</Box>
                                    <Box className='count'>{statistics.data.getPendingServiceProviderCount}</Box>
                                </Box>
                            </Grid>

                    </Grid>
              </Grid> */}
                    {/* <Grid item xs={12} sm={4}>
                <Grid xs spacing={2} direction={"row"} container>
                  <Grid sm={12} item><SpLatestActivityCard/></Grid>
                  <Grid sm={12} item><SpQuickPayment/></Grid>
                  <Grid sm={12} item><SpRating/></Grid>
                </Grid>
              </Grid> */}
                    {/* </Grid> */}
                </Box>
            </ThemeProvider>
        </>

    );
}