import { Avatar, Box, Typography } from '@mui/material';

const CommonField = ({ icon, title, description, technologies, tools }) => {
  return (
    <Box mt={2}>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Avatar src={icon} sx={{ width: 56, height: 56 }} />

        <Box mt={2} />
        <Typography variant='h6'>{title}</Typography>
        <Box mt={2} />
        <Typography variant='body2'>{description}</Typography>
        <Box mt={4} />
        <Typography variant='body2'>Technologies</Typography>
        {technologies.map((technology) => (
          <Typography variant='body2'>{technology}</Typography>
        ))}
        <Box mt={4} />
        <Typography variant='body2'>Dev Tools</Typography>
        {tools.map((tool) => (
          <Typography variant='body2'>{tool}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CommonField;
