export const CategoryColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },
    {
        width: "25%",
        Header: "CATEGORY",
        accessor: "category_name",
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


export const SubCategoryColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },
    {
        width: "25%",
        Header: "SUBCATEGORY",
        accessor: "sub_category_name",
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

export const ServiceCategoryColumn = [
    {
        width: "10%",

        Header: "ID",
        accessor: "id",
    },{
      
        Header: "Service Category",
        accessor: "service_category_name",
    },{
       
        Header: "Parent Category",
        accessor: "category_name",
    }, {
       
        Header: "Sub Category",
        accessor: "sub_category_name",
    }, {
       
        Header: "Visibility",
        accessor: "is_active",
        Cell: ({ value }) => {            
            return  value=='0'? <p className='inactivestatus'>Inactive</p> :<p className='activestatus'>Active</p>
        },
    
    } 

]
