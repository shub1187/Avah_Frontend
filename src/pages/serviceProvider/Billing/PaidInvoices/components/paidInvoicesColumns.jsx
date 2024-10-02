import { Box } from "@mui/material";
import ActionDialog from "components/common/Dialog/ActionDialog";
import URL from "url/apiURL";

const {approveCustAppointment} = URL.SERVICE_PROVIDER.BILLING.PAIDINVOICES
export const paidInvoicesColumns = (setPage, setEyeIconValue) => [
    { title: 'Invoice Number', field: 'invoice_number' },
    // {title:'Jobcard Number',field:'jobcard_number'},
    { title: 'Customer Name', field: 'name' },
    { title: 'Customer Mobile', field: 'mobile_number' },
    { title: 'Vehicle No', field: 'vehicle_number' },
    { title: 'Invoice Amount', field: 'invoice_amount' },
    { title: 'Payment Status', field: 'payment_status' },
    { title: 'Recieved By', field: 'invoice_collected_by' },
    // {title:'Recieved on',field:'invoice_collected_on'},
    {
        title: 'Action', render: (rowData) =>
            <Box>
                <ActionDialog
                    key='edit Estimate'
                    viewPaidInvoice
                    url={approveCustAppointment}
                    rowData={rowData}
                    setPage={setPage}
                    setEyeIconValue={setEyeIconValue}
                />
            </Box>
    }
]