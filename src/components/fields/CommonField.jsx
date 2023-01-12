import { Avatar, Box, Typography } from '@mui/material';

const CommonField = ({ icon, title, description, technologies, tools }) => {
  return (
    <Box pt={7} pl={4} pr={4} pb={6}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar
          src={icon}
          sx={{ width: 36, height: 36, padding: 2, bgcolor: 'text.primary' }}
        />

        <Box mt={3} />
        <Typography variant='h6' align='center' color='text.primary'>
          {title}
        </Typography>
        <Box mt={3} />
        <Typography variant='body2' align='center' color='text.secondary'>
          {description}
        </Typography>
        <Box mt={6} />
        <Typography variant='subtitle1' align='center' color='text.primary'>
          Key areas
        </Typography>
        <Box mt={1} />
        {technologies.map((technology) => (
          <Typography variant='body2' align='center' color='text.secondary'>
            {technology}
          </Typography>
        ))}
        <Box mt={6} />
        <Typography variant='subtitle1' align='center' color='text.primary'>
          Dev Tools
        </Typography>
        <Box mt={1} />
        {tools.map((tool) => (
          <Typography variant='body2' align='center' color='text.secondary'>
            {tool}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CommonField;
