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
        Header:"DOCUMENT",
        accessor:"document"
    },
    {
        Header: "ROLE",
        accessor: "role",
    },
    {
        Header: 'ACTIONS',
        Cell: ({ row }) => (
          <Box display={'flex'}>
            <Button onClick={() => handleApprove(row.id)} color="success">
              APPROVE
            </Button>
            <Button onClick={() => handleDeny(row.id)} color="error">
              DENY
            </Button>
          </Box>
        ),
    },

    // {
    //     Header: "LAST ACTIVITY",
    //     accessor: "updated_at",
    //     Cell: ({ value }) => { 
    //         return format(new Date(value), 'dd/MM/yyyy')

    //     }
    // }

]


