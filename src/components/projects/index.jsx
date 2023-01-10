import { Box, Grid } from '@mui/material';
import projects from '../../data/projects';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {
  return (
    <Box>
      <Box display='flex' justifyContent='center'>
        <Box sx={{ width: '88%' }}>
          <Grid container spacing={3}>
            {projects.length > 0
              ? projects.map((project) => (
                  <Grid item xs={12} md={4}>
                    <ProjectCard
                      icon={project.icon}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      link={project.link}
                      completed={project.completed}
                      isPublic={project.isPublic}
                    />
                  </Grid>
                ))
              : null}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectSection;
