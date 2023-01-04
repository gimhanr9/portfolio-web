import { Box, TextField, Typography } from '@mui/material';

const ContactComponent = () => {
  return (
    <Box>
      <Box sx={{ width: '80%' }}>
        <Typography variant='h6'>Contact</Typography>
        <Box mt={5} />
        <Typography variant='body2'>Name</Typography>
        <TextField variant='outlined' />
        <Box mt={2} />
      </Box>
    </Box>
  );
};

export default ContactComponent;
