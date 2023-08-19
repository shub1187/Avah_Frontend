import * as React from 'react';
import {Box,Button,Dialog} from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

// export default function SkeletonLoading() {
//   return (

//   );
// }

const SkeletonLoading = ({height,width,color,loading}) => {
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} >
          <Box p={2} sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      </Dialog>
    </div>
  )
}

export default SkeletonLoading