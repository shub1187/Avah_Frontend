
export const ManufactureColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "brand_id",
    },
    {
        width: "25%",
        Header: "Brand Name",
        accessor: "brand_name",
    },
    // {
    //     width: "50%",
    //     Header: "Visibility",
    //     accessor: "is_active",
    //     Cell: ({ value }) => {            
    //         return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
    //     },
    
    // } 

]


export const ModelColumn = [
    {
        width: "10%",
        Header: "ID",
        accessor: "model_id ", // remeber there is a extra space 
    },
    {
        width: "25%",
        Header: "Brand Name",
        accessor: "brand_name",
    },
    {
        width: "25%",
        Header: "Model Name",
        accessor: "model_name",
    },
    {
        width: "25%",
        Header: "Fuel Type",
        accessor: "fuel_type",
              Cell: ({value}) => {   
                let final_array = [] // To add space in UI
           value.map((val)=>{
                final_array.push(val+" ")
               })        
            return  <div>{final_array}</div>
        },
    },
    // {
    //     width: "50%",
    //     Header: "Visibility",
    //     accessor: "is_active",
    //     Cell: ({ value }) => {            
    //         return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
    //     },
    
    // } 

]


export const FuelColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "fuel_id",
    },
    {
        width: "25%",
        Header: "Fuel Type",
        accessor: "fuel_name",
    },
    // {
    //     width: "50%",
    //     Header: "Visibility",
    //     accessor: "is_active",
    //     Cell: ({ value }) => {            
    //         return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
    //     },
    
    // } 

]
