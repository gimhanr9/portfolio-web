import { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import projects from '../../data/projects';
import RoundedButton from '../common/RoundedButton';
import ProjectCard from './ProjectCard';
import DetailsDialog from './DetailsDialog';

const RenderProjects = ({ showMore, showDetails }) => {
  if (showMore === true && projects.length > 3) {
    return projects.map((project, index) => (
      <Grid key={index} display='flex' item xs={12} sm={6} lg={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          moreDetails={project.moreDetails}
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
    return topProjects.map((project, index) => (
      <Grid key={index} display='flex' item xs={12} md={6} lg={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          moreDetails={project.moreDetails}
          technologies={project.technologies}
          link={project.link}
          completed={project.completed}
          isPublic={project.isPublic}
          showDetails={showDetails}
        />
      </Grid>
    ));
  } else {
    return projects.map((project, index) => (
      <Grid key={index} display='flex' item xs={12} md={6} lg={4}>
        <ProjectCard
          icon={project.icon}
          title={project.title}
          description={project.description}
          moreDetails={project.moreDetails}
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

  const [openDialog, setOpenDialog] = useState({
    open: false,
    title: '',
    details: [],
    link: '',
  });

  const handleOpenDialog = (title, details, link) => {
    setOpenDialog({
      open: true,
      title: title,
      details: details,
      link: link,
    });
  };
  const handleCloseDialog = () => {
    setOpenDialog({
      open: false,
      title: '',
      details: [],
      link: '',
    });
  };

  const showMoreOrLess = () => {
    setShowMore(!showMore);
  };
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box pt={8} pb={8}>
        <DetailsDialog
          open={openDialog.open}
          title={openDialog.title}
          details={openDialog.details}
          link={openDialog.link}
          close={handleCloseDialog}
        />
        <Typography variant='h5' align='center' color='text.primary'>
          My projects
        </Typography>
        <Box display='flex' justifyContent='center'>
          <Box sx={{ width: '88%', paddingTop: 5, paddingBottom: 5 }}>
            <Grid container spacing={3} alignItems='stretch'>
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
