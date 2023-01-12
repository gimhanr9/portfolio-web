import { Box, TextareaAutosize, TextField, Typography } from '@mui/material';
import RoundedButton from '../common/RoundedButton';

const ContactComponent = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='center'>
        <Box pt={3} pb={8}>
          <Typography variant='h5' align='center' color='text.primary'>
            Send a message
          </Typography>
          <Box mt={5} />
          <Typography variant='body2'>Name</Typography>
          <TextField variant='outlined' size='small' fullWidth />
          <Box mt={2} />
          <Typography variant='body2'>Email</Typography>
          <TextField variant='outlined' size='small' fullWidth />
          <Box mt={2} />
          <Typography variant='body2'>Message</Typography>
          <TextField
            variant='outlined'
            multiline
            rows={8}
            fullWidth
            sx={{ resize: 'both' }}
          />
          <Box mt={4} />
          <Box display='flex' justifyContent='center'>
            <RoundedButton text={'Send message'} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactComponent;
