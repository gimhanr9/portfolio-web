import { Box, Grid, Stack, Typography } from '@mui/material';
import { Colors } from '../../utils/Colors';
import RoundedButton from '../common/RoundedButton';

const Footer = () => {
  return (
    <Box
      p={8}
      sx={{
        background: Colors.secondaryLight,
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 2, sm: 3 }}
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <Typography variant='h4' align='center'>
            Get in touch
          </Typography>
        </Box>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item>
              <img
                src='/assets/images/linkedin.png'
                alt='Linkedin'
                height={40}
                width={40}
              />
            </Grid>
            <Grid item>
              <img
                src='/assets/images/instagram.png'
                alt='Linkedin'
                height={40}
                width={40}
              />
            </Grid>
            <Grid item>
              <img
                src='/assets/images/mail.png'
                alt='Linkedin'
                height={40}
                width={40}
              />
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
