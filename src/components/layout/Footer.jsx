import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      pt={8}
      pl={8}
      pr={8}
      pb={3}
      sx={{
        bgcolor: 'background.secondary',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Typography variant='h4' align='center' color='text.primary'>
            Get in touch...
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item>
              <IconButton
                size='medium'
                target='_blank'
                href='https://www.linkedin.com/in/gimhan-rodrigo-23a5961b9/'
                color='primary'
                disableRipple
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                size='medium'
                target='_blank'
                href='https://www.instagram.com/gimhanamandyana/'
                color='primary'
                disableRipple
              >
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                size='medium'
                href='mailto:gimhanr9@gmail.com'
                color='primary'
                //onClick={() => (window.location = 'mailto:yourmail@domain.com')}

                disableRipple
              >
                <EmailIcon />
              </IconButton>
            </Grid>
          </Grid>
          <Box mt={1} />
          <Typography variant='body2' align='center' color='text.primary'>
            OR
          </Typography>
          <Box mt={1} />

          <Button component={Link} to='/message' variant='outlined'>
            Send a message
          </Button>
        </Box>
      </Stack>
      <Box display='flex' justifyContent='center' mt={3}>
        <Typography variant='body2' color='text.primary' align='center'>
          &copy; Gimhan Rodrigo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
