import { Box } from '@mui/material'
import MoreActionDialog from 'components/common/Dialog/MoreActionDialog'

export const addModelsAdminColumn = [
    { title: "Brand Name", field: "brand_name" },
    { title: "Model Name", field: "model_name" },
    { title: "Fuel Type", field: "fuel_type",
    render: (rowData) => rowData?.fuel_type?.join(", ")
     },
    {
        title: 'Action', render: (rowData) =>
            <Box display='flex'>
                <MoreActionDialog
                    rowData={rowData}
                />
            </Box>
    }
]