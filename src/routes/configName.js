import React from 'react'

const ConfigName = (props) => {
    var name = "Add New User"

    if (props == "CustomersPage") {
        name = "Add New User"

    } else if (props == "ServiceProviderPage") {
        name = "Add Service Provider"
    }
    else if (props == "ManufacturersPage") {
        name = "Add Brand"
    }
    else if (props == "ModelsPage") {
        name = "Add Model"
    }
    else if (props == "FuelTypePage") {
        name = "Add Fuel"
    }
    else if (props == "CategoryPage") {
        name = "Add Category"
    }
    else if (props == "SubCategoryPage") {
        name = "Add SubCategory"
    }
    else if (props == "ServiceCategoryPage") {
        name = "Add Service Category"
    }






    else if (props == "SpCustomersPage") {
        name = "Add Customer "
    }
    else if (props == "SpEmployeePage") {
        name = "Add Employee "
    }
    else if (props == "SparePage") {
        name = "Add Spare"
    }
    // else if (props == "ServiceCategoryPage") {
    //     name = "Add Service Category"
    // }
    // else if (props == "ServiceCategoryPage") {
    //     name = "Add Service Category"
    // }
  
    return name
}

export default ConfigName
