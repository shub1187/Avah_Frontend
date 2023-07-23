import { Button,Box } from '@mui/material'
import { format } from 'date-fns'
import React, { createContext, useState } from 'react';

export const RowContext = createContext();

export const RowProvider = ({ children }) => {
  const [selectedRowId, setSelectedRowId] = useState(null);

  return (
    <RowContext.Provider value={{ selectedRowId, setSelectedRowId }}>
      {children}
    </RowContext.Provider>
  );
}; 
export const RequestsColumn = [
  
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
            return  (<>
            <Box display={"flex"}>
                <Button onClick={()=>{}} color="success">APPROVE</Button>
                <Button onClick={()=>{}} color="error">DENY</Button>
            </Box>
            </>)
        },
    },
    {
        Header: "ROLE",
        accessor: "role",
    }
    // {
    //     Header: "LAST ACTIVITY",
    //     accessor: "updated_at",
    //     Cell: ({ value }) => { 
    //         return format(new Date(value), 'dd/MM/yyyy')

    //     }
    // }

]


