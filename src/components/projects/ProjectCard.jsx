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
  if (!completed) {
    return (
      <Button
        variant='outlined'
        size='small'
        startIcon={<GitHubIcon />}
        sx={{ borderRadius: 20 }}
        disabled
        fullWidth
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
        fullWidth
      >
        Github
      </Button>
    );
  } else if (completed && !isPublic) {
    return (
      <Button
        variant='outlined'
        size='small'
        startIcon={<GitHubIcon />}
        sx={{ borderRadius: 20 }}
        disabled
        fullWidth
      >
        Not Public
      </Button>
    );
  }
};

const Front = ({ icon, title, description, technologies, completed }) => {
  return (
    <Box className='front'>
      {/* <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img src={icon} alt='Project icon' />
      </Box> */}
      <Box>
        <Typography variant='h6' color='text.primary'>
          {title}
        </Typography>
        <Box mt={1} />
        <Chip
          size='small'
          color={completed === true ? 'success' : 'secondary'}
          label={completed === true ? 'Completed' : 'Pending'}
        />

        <Box mt={2} />
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
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

const Back = ({ title, details, completed, isPublic, link, showDetails }) => {
  const moreDetails = () => {
    showDetails(title, details, link);
  };
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      className='back'
      pl={5}
      pb={3}
      pr={5}
      pt={4}
    >
      {details.length > 0 ? (
        <Button
          variant='outlined'
          startIcon={<InfoOutlinedIcon />}
          size='small'
          sx={{ borderRadius: 20, mb: 2 }}
          onClick={() => {
            moreDetails();
          }}
          fullWidth
        >
          More Details
        </Button>
      ) : null}
      <RenderButton completed={completed} isPublic={isPublic} link={link} />
    </Box>
  );
};

const ProjectCard = ({
  icon,
  title,
  description,
  moreDetails,
  technologies,
  link,
  completed,
  isPublic,
  showDetails,
}) => {
  const [front, setFront] = useState(true);
  const styles = useSpring({
    from: { opacity: '1' },
    to: { opacity: '0' },
  });

  const fadeCard = () => {
    setFront(!front);
  };

  // const showMoreDetails = () => {
  //   showDetails();
  // };
  return (
    <Card
      elevation={3}
      // onMouseEnter={fadeCard}
      // onMouseLeave={fadeCard}
      className={'card-container'}
    >
      <CardContent className='content' sx={{ padding: 4 }}>
        <Front
          icon={icon}
          title={title}
          description={description}
          technologies={technologies}
          completed={completed}
        />

        <Back
          title={title}
          details={moreDetails}
          completed={completed}
          isPublic={isPublic}
          link={link}
          showDetails={showDetails}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
