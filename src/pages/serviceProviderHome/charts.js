import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexCharts = () => {
  const [series, setSeries] = useState([
    { name: 'Line 1', data: [] },
    { name: 'Line 2', data: [] },
  ]);
  const [options, setOptions] = useState({
    colors: ['rgb(173, 73, 112)', 'rgb(233, 56, 72)'], // Set the RGB colors for the lines
    chart: {
      id: 'realtime',
      height: 350,
      type: 'line',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      align: 'left'
    },
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime',
      labels: {
        formatter: function (value) {
          const date = new Date(value);
          const day = date.getDate();
          const month = date.toLocaleString('default', { month: 'short' });
          return `${day} ${month}`;
        },
      },
    },
    yaxis: {
      max: 100
    },
    legend: {
      show: false
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newSeriesData1 = generateNewSeriesData(); // Replace with logic to generate or fetch new data for Line 1
      const newSeriesData2 = generateNewSeriesData(); // Replace with logic to generate or fetch new data for Line 2
      setSeries([
        { name: 'Line 1', data: newSeriesData1 },
        { name: 'Line 2', data: newSeriesData2 },
      ]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const generateNewSeriesData = () => {
    // Example logic to generate random data points
    const newData = [];
    const currentTimestamp = new Date().getTime();
    for (let i = 0; i < 10; i++) {
      const timestamp = currentTimestamp + i * 1000;
      const value = Math.floor(Math.random() * 100);
      newData.push([timestamp, value]);
    }
    return newData;
  };

  return (
    <div id="chart">
        <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
            <Typography variant='h6'>BUSINESS EARNINGS</Typography>
        </Box>
        <Box >
            <Button sx={{backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",color:"white",fontWeight:"600",marginRight:"5px"}}>Weekly</Button>
            <Button sx={{backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",color:"white",fontWeight:"600",marginRight:"5px"}}>Monthly</Button>
            <Button sx={{backgroundImage:"linear-gradient(to bottom, rgb(233,56,72) , rgb(119,53,98))",color:"white",fontWeight:"600"}}>Yearly</Button>
        </Box>
      </Box>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default ApexCharts;