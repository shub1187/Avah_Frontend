import ServiceProviderHome from 'pages/serviceProvider/Home'
import SpAppointmentPage from 'pages/serviceProvider/Service/AppointmentList'
import SparesList from 'pages/serviceProvider/Spares/SpSparesPage'
import SpCustomerPage from 'pages/serviceProvider/Users/Customers/SpCustomerPage'
import React from 'react'
import SpCustomersPage from 'serviceprovider/page/dashboard/user/page/SpCustomersPage'
import SpEmployeePage from 'serviceprovider/page/dashboard/user/page/SpEmployeePage'

const serviceProviderRoutes = [
    {
        id:1,
        link:'dashboard/home',
        component:<ServiceProviderHome/>
      },
      {
        id:2,
        link:'dashboard/user',
        subList:[
          {
            id:21,
            link:'customer',
            component:<SpCustomerPage/>,
          },
          {
            id:22,
            link:'employees',
            component:<SpEmployeePage/>
          },
        ]
      },
      {
        id:3,
        link:'dashboard/spares',
        component:<SparesList/>
      },
      {
        id:4,
        link:'dashboard/labour',
      },
      {
        id:5,
        link:'dashboard/serviceType',    
      },
      {
        id:6,
        link:'dashboard/service',
        subList:[
          {
            id:61,
            link:'estimatesList',
          },
          {
            id:62,
            link:'appointmentList',
            component:<SpAppointmentPage/>
          },
          {
            id:63,
            link:'jobCardsList',
          },
          {
            id:64,
            link:'rejectedAppointment',
          },
        ]
      },
      {
        id:7,
        link:'dashboard/billing',
        subList:[
          {
            id:71,
            link:'invoiceList',
          },
          {
            id:72,
            link:'pendingPayments',
          },
        ]
      },
      {
        id:8,
        link:'dashboard/accounts',
        subList:[
          {
            id:81,
            link:'account',
          },
          {
            id:82,
            link:'ledger',
          },
        ]
      },
      {
        id:9,
        link:'/dashboard/packages',
      },
      {
        id:10,
        link:'/dashboard/reviews',
    
      },
      {
        id:11,
        link:'/dashboard/settings',
    
      },
]

export default serviceProviderRoutes