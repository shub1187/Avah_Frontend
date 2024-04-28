import "./index.scss"
import React, { useState,useEffect } from 'react'
import { paidInvoicesColumns } from "./components/paidInvoicesColumns"
import URL from "url/apiURL"
import { AlertTitle, Autocomplete, Box, Button, Chip, Grid, IconButton, InputLabel, TextField, Typography } from "@mui/material"
import FullyEditableAndDeletableTable from "components/common/Table/FullyEditableAndDeletableTable"
import { useFetchFunction } from "hooks/useFetch"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import paidInvoiceLabourColumn from "./components/labourColumn"
import paidInvoiceSparesColumn from "./components/spareColumn"
import PDF from "components/common/PDFDownload"
import Print from "components/common/Print"
import CloseIcon from '@mui/icons-material/Close';
import UnderLine from "components/common/Underline"
import { formatTimestampToDate } from "utils/customFunctions"
import CustomMaterialTable from "components/common/Table/MaterialTable"

const { getAllPaidInvoices,getJobcardDetails } = URL.SERVICE_PROVIDER.BILLING.PAIDINVOICES

const PaidInvoices = () => {
    const [page, setPage] = useState('table')
    const [eyeIconValue, setEyeIconValue] = useState([])
    const [sparePayload, setSparePayload] = useState([])
    const [labourPayload, setLabourSparePayload] = useState([])
    const { fetchData, snackbar, loadingIndicator } = useFetchFunction()
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

    useEffect(() => {
        if (page === 'eye-icon') {
            getJobcardDetailsApi();
        }
    }, [page]);

    const getJobcardDetailsApi = async () => {

        const obj = {
            method: "GET",
            url: `${getJobcardDetails}?sp_id=${localStorage.getItem('sp_id')}&jobcard_number=${eyeIconValue?.jobcard_number}`
        }
        const { data } = await fetchData(obj)

        let spareData = data?.data.spares
        let labourData = data?.data.labours

        spareData.forEach((obj) => {
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax / 100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax === 0 ? 0 : parseFloat(obj.tax / 100) * parseFloat(obj.selling_price)
            obj.backendDisabled = true
        })

        labourData.forEach((obj) => {
            obj.amount = isNaN(parseFloat(obj.selling_price)) ? 0 : parseFloat(obj.tax / 100) * parseFloat(obj.selling_price) + parseFloat(obj.selling_price)
            obj.tax_amount = !obj.tax ? 0 : obj.tax === 0 ? 0 : parseFloat(obj.tax / 100) * parseFloat(obj.selling_price)
            obj.backendDisabled = true
        })
        setSparePayload(data?.data?.spares)
        setLabourSparePayload(data?.data?.labours)
    }

    if (page === 'eye-icon') {
        // getEstimateDetailsApi()
        return (
            <>
                <div>
                    <Box className='flex jc-space-between mb-3'>
                        <Button className='small-button' onClick={() => setPage('table')} variant='outlined' color='options'>Back <ArrowBackIcon /></Button>
                    </Box>
                    <Box className='flex mb-4'>
                        <Box className='width-half'>
                            <Typography mb={1} fontWeight={'bold'}>Vehicle Details<UnderLine/></Typography>
                            <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                                <Box className='mr-3'>
                                    <Box>Vehicle Number</Box>
                                    <Box >Model</Box>
                                    <Box >Manufacturer</Box>
                                    <Box >Vehicle Type</Box>
                                    <Box>KM Driven</Box>
                                </Box>
                                <Box>
                                    <Box>: {eyeIconValue?.vehicle_number}</Box>
                                    <Box >: {eyeIconValue?.model}</Box>
                                    <Box >: {eyeIconValue?.brand}</Box>
                                    <Box >: {eyeIconValue?.fuel_type}</Box>
                                    <Box>: {eyeIconValue?.kilometers_driven}</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='width-half'>
                            <Typography mb={1} fontWeight={'bold'}>Customer Details<UnderLine/></Typography>
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
                                    <Box>: {eyeIconValue?.name}</Box>
                                    <Box >: {eyeIconValue?.pickup_address}</Box>
                                    <Box >: {eyeIconValue?.mobile_number}</Box>
                                    <Box >: {eyeIconValue?.email}</Box>
                                    <Box >: {eyeIconValue?.payment_status}</Box>
                                    <Box >: {eyeIconValue?.payment_method}</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='flex mb-4'>
                        <Box className='width-half'>
                            <Typography mb={1} fontWeight={'bold'}>Appointment Details<UnderLine/></Typography>
                            <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                                <Box className='mr-3'>
                                    <Box>Appointment Status</Box>
                                    <Box >Appointment Time</Box>
                                    <Box >Appointment Date</Box>
                                </Box>
                                <Box>
                                    <Box>: {eyeIconValue?.appointment_status}</Box>
                                    <Box >: {eyeIconValue?.appointment_time}</Box>
                                    <Box >: {eyeIconValue?.appointment_date}</Box>
                                </Box>
                            </Box>
                        </Box>
                        {eyeIconValue?.advisor_name && (
                            <Box className='width-half'>
                                <Typography mb={1} fontWeight={'bold'}>Employees Details<UnderLine/></Typography>
                                <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                                    <Box className='mr-3'>
                                        <Box>Advisor</Box>
                                        <Box >Technicians</Box>
                                    </Box>
                                    <Box>
                                        <Box>: {eyeIconValue?.advisor_name}</Box>
                                        <Box >: {eyeIconValue?.technician_name?.map((name) => name + ", ")}</Box>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                    </Box>
                    <Box className='flex mb-3'>
                        <Box className='width-half'>
                            <Typography mb={1} fontWeight={'bold'}>Estimate/JobCard Details<UnderLine/></Typography>
                            <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                                <Box className='mr-3'>
                                    <Box>Estimate Created On</Box>
                                    <Box >Estimate Created By</Box>
                                    <Box >Jobcard Created By</Box>
                                    <Box >Jobcard Opened On</Box>
                                    {eyeIconValue?.estimate_rejection_note && <Box >Estimate Rejection Note</Box>}
                                    {eyeIconValue?.cust_cancellation_note && <Box >Customer Cancellation Note</Box>}
                                    {eyeIconValue?.sp_cancellation_note && <Box >Service Provider Cancellation Note</Box>}
                                    {eyeIconValue?.sp_rejection_note && <Box >Service Provider Rejection Note</Box>}
                                </Box>
                                <Box>
                                    <Box>: {formatTimestampToDate(eyeIconValue?.estimate_created_on)}</Box>
                                    <Box >: {eyeIconValue?.estimate_created_by}</Box>
                                    <Box >: {eyeIconValue?.jobcard_created_by}</Box>
                                    <Box >: {formatTimestampToDate(eyeIconValue?.jobcard_opened_on)}</Box>
                                    {eyeIconValue?.estimate_rejection_note && <Box >: {eyeIconValue?.estimate_rejection_note}</Box>}
                                    {eyeIconValue?.cust_cancellation_note && <Box >: {eyeIconValue?.cust_cancellation_note}</Box>}
                                    {eyeIconValue?.sp_cancellation_note && <Box >: {eyeIconValue?.sp_cancellation_note}</Box>}
                                    {eyeIconValue?.sp_rejection_note && <Box >: {eyeIconValue?.sp_rejection_note}</Box>}
                                </Box>
                            </Box>
                        </Box>
                        <Box className='width-half'>
                            <Typography mb={1} fontWeight={'bold'}>Invoice Details<UnderLine/></Typography>
                            <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                                <Box className='mr-3'>
                                    <Box>Invoice Amount</Box>
                                    <Box>Invoice Collected By</Box>
                                    <Box>Invoice Created By</Box>
                                    <Box >Service Completed On</Box>
                                </Box>
                                <Box>
                                    <Box>: {eyeIconValue?.invoice_amount}</Box>
                                    <Box>: {eyeIconValue?.invoice_collected_by}</Box>
                                    <Box>: {eyeIconValue?.invoice_created_by}</Box>
                                    <Box>: {formatTimestampToDate(eyeIconValue?.service_completed_on)}</Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3'>
                        <FullyEditableAndDeletableTable
                            title={'SPARES'}
                            buttonName={'Add Spares'}
                            data={sparePayload}
                            column={paidInvoiceSparesColumn}
                            setPayload={setSparePayload}
                            autoCompleteFieldName={'name'}
                            getApiUrlOnAutocompleteItemSelectParams={'spare_name'}
                            viewOnly
                        />
                    </Box>
                    <Box maxHeight={'400px'} overflow={'auto'} className='mb-3' >
                        <FullyEditableAndDeletableTable
                            title={'LABOURS'}
                            buttonName={'Add Labours'}
                            data={labourPayload}
                            column={paidInvoiceLabourColumn}
                            setPayload={setLabourSparePayload}
                            autoCompleteFieldName={'name'}
                            getApiUrlOnAutocompleteItemSelectParams={'labour_name'}
                            viewOnly
                        />
                    </Box>
                    <Box className='flex jc-flex-end ai-center'>
                        <Box className='flex jc-flex-end ai-center'>
                            <Box className='bold' >Grand Total = </Box>
                            <Box className='mr-1'> Total Amount of Spares + Total Amount of Labour</Box>
                            <Box className='mr-4 textfield-grey-background'>
                                <TextField
                                    size='small'
                                    disabled
                                    value={
                                        calculateTotalAmount(sparePayload, labourPayload)
                                    }
                                />
                            </Box>
                        </Box>
                        <IconButton color='options' onClick={() => setPage('table')}>
                            <Box className='flex ai-flex-start jc-center column'>
                                <Typography fontSize={9}> Back</Typography>
                                <CloseIcon style={{ cursor: 'pointer', marginRight: '5px' }} />
                            </Box>
                        </IconButton>
                        <PDF rowData={eyeIconValue} spareData={sparePayload} labourData={labourPayload}/>
                        <Print rowData={eyeIconValue} spareData={sparePayload} labourData={labourPayload}/>
                    </Box>
                    <Box>

                    </Box>
                </div>
                {snackbar}
                {loadingIndicator}
            </>
        )
    }
    return (
        <div>
            <CustomMaterialTable
                URL={getAllPaidInvoices}
                columnss={paidInvoicesColumns(() => setPage('eye-icon'), setEyeIconValue)}
            // clickButton= {()=>setPage('create-job-card')}
            // buttonName={'CREATE JOB CARD'}
            />
        </div>
    )
}

export default PaidInvoices