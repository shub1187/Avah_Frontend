
export const ManufactureColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },
    {
        width: "25%",
        Header: "Brand Name",
        accessor: "brand_name",
    },
    {
        width: "50%",
        Header: "Visibility",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    
    } 

]


export const ModelColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },
    {
        width: "25%",
        Header: "Brand Name",
        accessor: "model_name",
    },
    {
        width: "50%",
        Header: "Visibility",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    
    } 

]


export const FuelColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },
    {
        width: "25%",
        Header: "Fuel Type",
        accessor: "fuel_name",
    },
    {
        width: "50%",
        Header: "Visibility",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    
    } 

]
