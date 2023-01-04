import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = (icon, title, description, technologies, link) => {
  return (
    <Card sx={{ minWidth: 300 }}>
      <CardContent sx={{ padding: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <img src={icon} alt='Project icon' />
        </Box>
        <Box>
          <Typography variant='h6'>{title}</Typography>
          <Box mt={2} />
          <Typography variant='body2'>{description}</Typography>
          <Box mt={2} />
        </Box>
        <Box>
          {technologies.map((technology) => (
            <Box mr={1}>
              <Chip label={technology} />
            </Box>
          ))}
        </Box>
        <Box>
          <Button
            variant='outlined'
            href='#outlined-buttons'
            startIcon={<GitHubIcon />}
            sx={{ borderRadius: 20 }}
          >
            Visit Github
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
