import ServiceProviderHome from 'pages/serviceProvider/Home'
import SpLabourPage from 'pages/serviceProvider/Labour'
import SpRolesPage from 'pages/serviceProvider/Roles'
import SpAppointmentPage from 'pages/serviceProvider/Service/Appointment'
import SpEstimateList from 'pages/serviceProvider/Service/Estimate'
import SparesList from 'pages/serviceProvider/Spares'
import SpCustomerPage from 'pages/serviceProvider/Users/Customers'
import SpEmployeesPage from 'pages/serviceProvider/Users/Employees'
import React from 'react'
import SpCustomersPage from 'serviceprovider/page/dashboard/user/page/SpCustomersPage'

const serviceProviderRoutes = [
    {
        id:1,
        link:'dashboard/home',
        component:<ServiceProviderHome/>,
      },
      {
        id:2,
        link:'dashboard/user',
        role:'Users',
        subList:[
          {
            id:21,
            link:'customer',
            component:<SpCustomerPage/>,
          },
          {
            id:22,
            link:'employees',
            component:<SpEmployeesPage/>,
          },
        ]
      },
      {
        id:3,
        link:'dashboard/roles',
        role:'Roles',
        component:<SpRolesPage/>,
      },
      {
        id:4,
        link:'dashboard/spares',
        role:'Spares',
        component:<SparesList/>,
      },
      {
        id:5,
        link:'dashboard/labour',
        role:'Labour',
        component:<SpLabourPage/>
      },
      {
        id:6,
        link:'dashboard/serviceType', 
        role:'Service Type',
   
      },
      {
        id:7,
        link:'dashboard/service',
        role:'Service',
        subList:[
          {
            id:71,
            link:'estimatesList',
            component:<SpEstimateList/>
          },
          {
            id:72,
            link:'appointmentList',
            component:<SpAppointmentPage/>
          },
          {
            id:73,
            link:'jobCardsList',
          },
        ]
      },
      {
        id:8,
        link:'dashboard/billing',
        role:'Billing',
        subList:[
          {
            id:81,
            link:'invoiceList',
          },
          {
            id:82,
            link:'pendingPayments',
          },
        ]
      },
      {
        id:9,
        link:'dashboard/accounts',
        role:'Accounts',
        subList:[
          {
            id:91,
            link:'account',
          },
          {
            id:92,
            link:'ledger',
          },
        ]
      },
      {
        id:10,
        link:'/dashboard/packages',
        role:'Packages',
      },
      {
        id:11,
        link:'/dashboard/reviews',
        role:'Reviews',
      },
      {
        id:12,
        link:'/dashboard/settings',
        role:'Settings',
      },
]

export default serviceProviderRoutes