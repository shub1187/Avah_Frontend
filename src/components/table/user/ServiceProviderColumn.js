import { format } from 'date-fns'

export const ServiceProviderColumn = [
  
    {
        Header: "NAME",
        accessor: "name",
    },
    {
        Header: "EMAIL",
        accessor: "email",
    },
    {
        Header: "BUSINESS NAME",
        accessor: "business_name",
    },
    {
        Header: "BUSINESS TYPE",
        accessor: "business_type",
    },
    {
        Header: "STATUS",
        accessor: "sp_status",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    },
    {
        Header: "ROLE",
        accessor: "role",
    },
    {
        Header: "LAST ACTIVITY",
        accessor: "updated_at",
        Cell: ({ value }) => { 
            return format(new Date(value), 'dd/MM/yyyy')

        }
    }

]


