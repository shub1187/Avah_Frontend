import { format } from 'date-fns'

export const CustomerColumn = [
  
    {
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "NAME",
        accessor: "first_name",
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
        Header: "Role",
        accessor: "role"
    },
    {
        Header: "MOBILE",
        accessor: "mobile"
    }
    ,
    {
        Header: "LAST ACTIVITY",
        accessor: "updated_at",
        Cell: ({ value }) => { 
            return format(new Date(value), 'dd/MM/yyyy')

        }
    }

]

