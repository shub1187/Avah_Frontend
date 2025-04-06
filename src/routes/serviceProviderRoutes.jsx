import PaidInvoices from 'pages/serviceProvider/Billing/PaidInvoices'
import PendingPayments from 'pages/serviceProvider/Billing/PendingPayments'
import ServiceProviderHome from 'pages/serviceProvider/Home'
import SpLabourPage from 'pages/serviceProvider/Labour'
import Review from 'pages/serviceProvider/Review'
import SpRolesPage from 'pages/serviceProvider/Roles'
import SpAppointmentPage from 'pages/serviceProvider/Service/Appointment'
import SpEstimateList from 'pages/serviceProvider/Service/Estimate'
import JobCard from 'pages/serviceProvider/Service/JobCard'
import SparesList from 'pages/serviceProvider/Spares'
import SpCustomerPage from 'pages/serviceProvider/Users/Customers'
import SpEmployeesPage from 'pages/serviceProvider/Users/Employees'

const serviceProviderRoutes = [
    {
        id:1,
        link:'serviceProvider/home',
        component:<ServiceProviderHome/>,
      },
      {
        id:2,
        link:'serviceProvider/user',
        role:'Users',
        subList:[
          {
            id:21,
            link:'employees',
            component:<SpEmployeesPage/>,
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
        link:'serviceProvider/roles',
        role:'Roles',
        component:<SpRolesPage/>,
      },
      {
        id:4,
        link:'serviceProvider/spares',
        role:'Spares',
        component:<SparesList/>,
      },
      {
        id:5,
        link:'serviceProvider/labour',
        role:'Labour',
        component:<SpLabourPage/>
      },
      {
        id:6,
        link:'serviceProvider/serviceType', 
        role:'Service Type',
   
      },
      {
        id:7,
        link:'serviceProvider/service',
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
            component:<JobCard/>
          },
        ]
      },
      {
        id:8,
        link:'serviceProvider/billing',
        role:'Billing',
        subList:[
          {
            id:81,
            link:'pendingPayments',
            component:<PendingPayments/>
          },
          {
            id:82,
            link:'invoiceList',
            component:<PaidInvoices/>
          }     
        ]
      },
      {
        id:9,
        link:'serviceProvider/review',
        role:'Review',
        component:<Review/>
      },
      {
        id:10,
        link:'/serviceProvider/packages',
        role:'Packages',
      },
      {
        id:11,
        link:'/serviceProvider/reviews',
        role:'Reviews',
      },
      {
        id:12,
        link:'/serviceProvider/settings',
        role:'Settings',
      },
]

export default serviceProviderRoutes