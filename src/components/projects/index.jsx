import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import projects from '../../data/projects';
import RoundedButton from '../common/RoundedButton';
import ProjectCard from './ProjectCard';
import DetailsDialog from './DetailsDialog';

const RenderProjects = ({ showMore, showDetails }) => {
  if (showMore === true && projects.length > 3) {
    return projects.map((project) => (
      <Grid item xs={12} md={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          completed={project.completed}
          isPublic={project.isPublic}
          showDetails={showDetails}
        />
      </Grid>
    ));
  } else if (showMore === false && projects.length > 3) {
    const topProjects = projects.slice(0, 3);
    return topProjects.map((project) => (
      <Grid item xs={12} md={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          completed={project.completed}
          isPublic={project.isPublic}
          showDetails={showDetails}
        />
      </Grid>
    ));
  } else {
    return projects.map((project) => (
      <Grid item xs={12} md={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
          completed={project.completed}
          isPublic={project.isPublic}
          showDetails={showDetails}
        />
      </Grid>
    ));
  }
};

const RenderButton = ({ showMore, functionality }) => {
  if (projects.length > 3) {
    return (
      <Box display='flex' justifyContent='center' mt={6}>
        <RoundedButton
          text={showMore === false ? 'Show more' : 'Show less'}
          functionality={functionality}
        />
      </Box>
    );
  } else {
    return null;
  }
};
const ProjectSection = () => {
  const [showMore, setShowMore] = useState(false);

  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const showMoreOrLess = () => {
    setShowMore(!showMore);
  };
  return (
    <Box>
      <Box pt={8} pb={8}>
        <DetailsDialog open={openDialog} close={handleCloseDialog} />
        <Typography variant='h5' align='center' color='text.primary'>
          My projects
        </Typography>
        <Box display='flex' justifyContent='center'>
          <Box sx={{ width: '88%', paddingTop: 5, paddingBottom: 5 }}>
            <Grid container spacing={3}>
              <RenderProjects
                showMore={showMore}
                showDetails={handleOpenDialog}
              />
            </Grid>
            <RenderButton showMore={showMore} functionality={showMoreOrLess} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
