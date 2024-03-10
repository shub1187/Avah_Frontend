import { Box, Typography } from '@mui/material'
import React from 'react'
import UnderLine from '../Underline'
// const data = {names:['Jobcard Created By','Age','Job','Villi'],values:['Raees','Phil','Subham']}
const DetailsCardWithTitle = ({ data, title, underline }) => {
    return (
        <>
            {title && <Typography mb={1} fontWeight={'bold'}>{title}{underline &&<UnderLine/>}</Typography>}
            <Box color={'#8F8F8E'} fontSize={'0.7rem'} className='flex'>
                <Box className='mr-3'>{data?.names?.map((name) => name && <Box>{name}</Box>)}</Box>
                <Box>{data?.values?.map((value) => value && <Box>: {value}</Box>)}</Box>
            </Box>

        </>
    )
}

export default DetailsCardWithTitle