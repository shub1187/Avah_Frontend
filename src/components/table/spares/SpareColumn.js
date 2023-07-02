

export const SpareColumn = [
    {
        width: "10%",
        Header: "ID",
        accessor: "id",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "HSN/SAC",
        accessor: "hsn_sac",
    },
    {
        Header: "Part Number",
        accessor: "part_number",
    },
    {
        Header: "Fuel Type",
        accessor: "fuel_type_id",
    },
    {
        Header: "Threshold",
        accessor: "threshold",
    },
    {
        Header: "Purchase Price",
        accessor: "purchase_price",
    },
    {
        Header: "Selling Price",
        accessor: "selling_price",
    },
    {
        Header: "Tax Price",
        accessor: "tax_price",
    },
    {
        Header: "Status",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    },
    

]