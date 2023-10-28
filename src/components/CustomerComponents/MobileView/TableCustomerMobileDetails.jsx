import { useCustomerFetchFunction, useFetchFunction } from 'hooks/useFetch'
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
const TableCustomerMobileDetails = ({URL}) => {
    const mock = {
        "results": [
          {
            "appointment_id": 10,
            "name": "shadab shaikh",
            "vehicle_number": "GJ85UU9988",
            "vehicle_type": "Commercial",
            "brand": "Maruti Suzuki",
            "model": "Swift",
            "customization": "Showroom Fitted",
            "fuel_type": "Electric",
            "email": "shadab@gmail.com",
            "mobile_number": "000025418",
            "pickup_drop": "Self Drive",
            "pickup_address": null,
            "appointment_date": "2023-10-23T18:30:00.000Z",
            "appointment_time": "11am",
            "appointment_status": "approved",
            "estimate_status": "pending"
          },
          {
            "appointment_id": 3,
            "name": "Sakshi Patil",
            "vehicle_number": "MH43AB3133",
            "vehicle_type": "personal",
            "brand": "Maruti Suzuki",
            "model": "Swift",
            "customization": "Showroom Fitted",
            "fuel_type": "Diesel",
            "email": "sakshi@gmailcom",
            "mobile_number": "7755663322",
            "pickup_drop": "Company Executive",
            "pickup_address": "Flat No.-02 Sawan Mansion Plot no-27 Kopar Khairane Navi Mumbai",
            "appointment_date": "2023-08-19T18:30:00.000Z",
            "appointment_time": "11am",
            "appointment_status": "pending",
            "estimate_status": "pending"
          },
          // Add more objects here to reach a total of 10
          {
            "appointment_id": 4,
            "name": "John Doe",
            "vehicle_number": "XYZ123",
            "vehicle_type": "Personal",
            "brand": "Ford",
            "model": "Focus",
            "customization": "Aftermarket",
            "fuel_type": "Gasoline",
            "email": "john.doe@example.com",
            "mobile_number": "1234567890",
            "pickup_drop": "Self Drive",
            "pickup_address": "123 Main St, City",
            "appointment_date": "2023-10-25T14:00:00.000Z",
            "appointment_time": "2pm",
            "appointment_status": "approved",
            "estimate_status": "completed"
          },
          {
            "appointment_id": 5,
            "name": "Alice Johnson",
            "vehicle_number": "AB567CD",
            "vehicle_type": "Commercial",
            "brand": "Toyota",
            "model": "Camry",
            "customization": "Showroom Fitted",
            "fuel_type": "Hybrid",
            "email": "alice.johnson@example.com",
            "mobile_number": "9876543210",
            "pickup_drop": "Company Executive",
            "pickup_address": "456 Elm St, Town",
            "appointment_date": "2023-11-01T10:30:00.000Z",
            "appointment_time": "10:30am",
            "appointment_status": "pending",
            "estimate_status": "pending"
          },
          {
            "appointment_id": 6,
            "name": "David Smith",
            "vehicle_number": "PQR789",
            "vehicle_type": "Personal",
            "brand": "Honda",
            "model": "Civic",
            "customization": "Aftermarket",
            "fuel_type": "Gasoline",
            "email": "david.smith@example.com",
            "mobile_number": "5551234567",
            "pickup_drop": "Self Drive",
            "pickup_address": "789 Oak St, Village",
            "appointment_date": "2023-09-15T16:00:00.000Z",
            "appointment_time": "4pm",
            "appointment_status": "approved",
            "estimate_status": "completed"
          },
          {
            "appointment_id": 7,
            "name": "Emily Wilson",
            "vehicle_number": "LMN456",
            "vehicle_type": "Commercial",
            "brand": "Chevrolet",
            "model": "Malibu",
            "customization": "Showroom Fitted",
            "fuel_type": "Gasoline",
            "email": "emily.wilson@example.com",
            "mobile_number": "7778889999",
            "pickup_drop": "Company Executive",
            "pickup_address": "111 Pine St, Suburb",
            "appointment_date": "2023-10-29T13:15:00.000Z",
            "appointment_time": "1:15pm",
            "appointment_status": "approved",
            "estimate_status": "completed"
          },
          {
            "appointment_id": 8,
            "name": "Michael Brown",
            "vehicle_number": "JKL012",
            "vehicle_type": "Personal",
            "brand": "Nissan",
            "model": "Altima",
            "customization": "Aftermarket",
            "fuel_type": "Gasoline",
            "email": "michael.brown@example.com",
            "mobile_number": "3334445555",
            "pickup_drop": "Self Drive",
            "pickup_address": "222 Maple St, County",
            "appointment_date": "2023-11-10T12:45:00.000Z",
            "appointment_time": "12:45pm",
            "appointment_status": "pending",
            "estimate_status": "pending"
          },
          {
            "appointment_id": 9,
            "name": "Olivia Davis",
            "vehicle_number": "UVW345",
            "vehicle_type": "Commercial",
            "brand": "Subaru",
            "model": "Outback",
            "customization": "Showroom Fitted",
            "fuel_type": "Hybrid",
            "email": "olivia.davis@example.com",
            "mobile_number": "8889990000",
            "pickup_drop": "Company Executive",
            "pickup_address": "333 Cedar St, Rural",
            "appointment_date": "2023-09-05T15:30:00.000Z",
            "appointment_time": "3:30pm",
            "appointment_status": "pending",
            "estimate_status": "pending"
          },
        ],
      };
    const {fetchCustomerData} = useCustomerFetchFunction()
    const [data,setData]= useState([])
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        const {data} =fetchCustomerData({url:URL,method:'GET'})
        setData(data)
    }
    ,[])
  return (
    <>
        <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ mb: 2,mt:2 }}
        />
        {mock.results
                .filter((object) => {
                    // Filter based on search term
                    return Object.values(object).some((value) =>
                      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
                    );
                  })
        
                .map((filteredObject)=>(
                <Card sx={{ minWidth: 275,my:2 }}>
                <CardContent>
                    {Object.keys(filteredObject).map((key)=>(
                        <Grid xs={12} container display={'flex'} justifyContent={'space-between'} >
                            <Grid item xs={6}><Typography component={'span'} fontWeight={'bold'} fontSize={16}>{key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} : </Typography></Grid>
                            <Grid item xs={6}><Typography  component={'span'} fontSize={12}>{filteredObject[key]}</Typography></Grid>
                        </Grid>
                    ))}
                </CardContent>
                {/* <CardActions>
                <Button size="small">Learn More</Button>
                </CardActions> */}
                </Card>  )
            )
        }
    </>
    )
}
export default TableCustomerMobileDetails