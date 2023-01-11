import { Box, Typography, Avatar } from '@mui/material';
import { Colors } from '../../utils/Colors';

const AboutSection = () => {
  return (
    <Box>
      <Box sx={{ bgcolor: 'background.default' }}>
        <Box
          mt={6}
          ml={2}
          mr={2}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' align='center' color='text.primary'>
            Full-Stack Developer, Mobile Developer & ML Enthusiast
          </Typography>
          <Box mt={6} />
          {/* <Avatar src='' sx={{ width: 165, height: 165 }} /> */}
        </Box>
      </Box>

      <Box
        className='about'
        mt={6}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.secondary',
        }}
      >
        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          pt={10}
          pb={10}
          sx={{ width: '55%' }}
        >
          <Box sx={{ bgcolor: '#2E2252', padding: 2 }}>
            <Typography
              variant='h5'
              align='center'
              sx={{ color: Colors.white }}
            >
              Hey! I am Gimhan.
            </Typography>
          </Box>
          <Box mt={3} />
          <Typography variant='body2' align='center' color='text.secondary'>
            A tech-savvy problem-solver who loves to bring ideas and innovation
            to life. Concentrated on the areas of full-stack web development and
            mobile app development while also being enthusiastic about machine
            learning. Ready to learn, grow and create something amazing!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
