import { Box, Grid, IconButton, Stack, Typography } from '@mui/material';
import { Colors } from '../../utils/Colors';
import RoundedButton from '../common/RoundedButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      p={8}
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
          <Typography variant='body2' align='center'>
            OR
          </Typography>
          <Box mt={1} />
          <RoundedButton text={'Send a message'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
