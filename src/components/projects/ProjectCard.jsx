import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useSpring, animated } from '@react-spring/web';

const RenderButton = ({ completed, isPublic, link }) => {
  if (completed) {
    return (
      <Button
        variant='outlined'
        size='small'
        startIcon={<AccessTimeIcon />}
        sx={{ borderRadius: 20 }}
        disabled
      >
        Pending Completion
      </Button>
    );
  } else if (isPublic) {
    return (
      <Button
        variant='outlined'
        target='_blank'
        href={link}
        startIcon={<GitHubIcon />}
        size='small'
        sx={{ borderRadius: 20 }}
      >
        View Repository
      </Button>
    );
  } else {
    return (
      <Button
        variant='outlined'
        startIcon={<InfoOutlinedIcon />}
        size='small'
        sx={{ borderRadius: 20 }}
      >
        More Details
      </Button>
    );
  }
};

const Front = ({ icon, title, description, technologies }) => {
  return (
    <Box className='front'>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={icon} alt='Project icon' />
      </Box>
      <Box>
        <Typography variant='h6'>{title}</Typography>
        <Box mt={2} />
        <Typography variant='body2'>{description}</Typography>
        <Box mt={2} />
      </Box>
      <Grid container spacing={1}>
        {technologies.map((technology, index) => (
          <Grid item key={index}>
            <Chip size='small' label={technology} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const Back = ({ completed, isPublic, link }) => {
  return (
    <Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      className='back'
    >
      <RenderButton completed={completed} isPublic={isPublic} link={link} />
    </Box>
  );
};

const ProjectCard = ({
  icon,
  title,
  description,
  technologies,
  link,
  completed,
  isPublic,
}) => {
  const [front, setFront] = useState(true);
  const styles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
  });

  const fadeCard = () => {
    setFront(!front);
  };
  return (
    <Card
      elevation={3}
      onMouseEnter={fadeCard}
      onMouseLeave={fadeCard}
      className={'card-container'}
    >
      <CardContent className='content' sx={{ padding: 4 }}>
        <Front
          icon={icon}
          title={title}
          description={description}
          technologies={technologies}
        />
        <Back completed={completed} isPublic={isPublic} link={link} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
