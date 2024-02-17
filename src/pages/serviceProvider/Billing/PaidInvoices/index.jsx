import ServiceProvidertable from "components/spComponents/Table/ServiceProviderTable"
import "./index.scss"

import React, { useState } from 'react'
import { paidInvoicesColumns } from "./components/paidInvoicesColumns"
import URL from "url/apiURL"
const {getAllPaidInvoices} = URL.SERVICE_PROVIDER.BILLING.PAIDINVOICES

const PaidInvoices = () => {
    const [page, setPage] = useState('eye-icon')
    const [eyeIconValue,setEyeIconValue] = useState([])
    return (
        <div>
                <ServiceProvidertable
                    URL={getAllPaidInvoices}
                    columnss={paidInvoicesColumns(()=>setPage('eye-icon'),setEyeIconValue)}
                    // clickButton= {()=>setPage('create-job-card')}
                    // buttonName={'CREATE JOB CARD'}
                />
        </div>
      )
}

export default PaidInvoices