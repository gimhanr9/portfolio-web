import { Box, Typography, Avatar } from '@mui/material';

const AboutSection = () => {
  return (
    <Box>
      <Box className='heading' mt={6}>
        <Box
          ml={2}
          mr={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' align='center'>
            Full-Stack Developer, Mobile Developer & ML Enthusiast
          </Typography>
          <Box mt={6} />
          <Avatar src='' sx={{ width: 165, height: 165 }} />
        </Box>
      </Box>

      <Box
        className='about'
        mt={6}
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box sx={{ width: '55%' }}>
          <Typography variant='h5' align='center'>
            Hi, I am Gimhan.
          </Typography>
          <Box mt={3} />
          <Typography variant='body2' align='center'>
            I am a creative and hard-working individual who has one year
            industry experience as a software engineering intern and is
            passionate about work and has skills in the fields of software, web
            development, mobile application development and machine learning
            together with strong interpersonal skills and the ability to meet
            deadlines on time.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
