import { format } from 'date-fns'

export const DealersColumn = [
  
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "NAME",
        accessor: "first_name",
    },
    {
        Header: "BUSINESS TYPE",
        accessor: "role",
    },
    {
        Header: "LOCATION",
        accessor: "location",
    },
    {
        Header: "EMAIL",
        accessor: "email",
    },
    {
        Header: "STATUS",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    },

    {
        Header: "LAST ACTIVITY",
        accessor: "updated_at",
        Cell: ({ value }) => { 
            return format(new Date(value), 'dd/MM/yyyy')

        }
    }

]


