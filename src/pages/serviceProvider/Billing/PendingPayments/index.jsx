import "./index.scss"
import URL from "url/apiURL"
import React, { useState } from 'react'
import { pendingPaymentsColumns } from "./components/pendingPaymentsColumns"
import ServiceProvidertable from "components/spComponents/Table/ServiceProviderTable"

const {getAllPendingPaymentInvoices} = URL.SERVICE_PROVIDER.BILLING.PENDINGPAYMENTS

const PendingPayments = () => {
    const [page, setPage] = useState('eye-icon')
    const [eyeIconValue,setEyeIconValue] = useState([])

    return (
        <div>
                <ServiceProvidertable
                    URL={getAllPendingPaymentInvoices}
                    columnss={pendingPaymentsColumns(()=>setPage('eye-icon'),setEyeIconValue)}
                    // clickButton= {()=>setPage('create-job-card')}
                    // buttonName={'CREATE JOB CARD'}
                />
        </div>
      )
}

export default PendingPayments