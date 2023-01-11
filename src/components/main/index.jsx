import { Box } from '@mui/material';
import AboutSection from '../about';
import FieldSection from '../fields';
import ProjectSection from '../projects';
import WorkSection from '../work';

const MainComponent = () => {
  return (
    <Box>
      <AboutSection />
      <FieldSection />
      <Box mt={6} />
      <WorkSection />
      <Box mt={6} />
      <ProjectSection />
    </Box>
  );
};

export default MainComponent;
