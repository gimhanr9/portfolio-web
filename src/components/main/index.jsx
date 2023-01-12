import { Box } from '@mui/material';
import AboutSection from '../about';
import FieldSection from '../fields';
import ProjectSection from '../projects';
import WorkSection from '../work';

const MainComponent = () => {
  return (
    <Box>
      <section id='about'>
        <AboutSection />
      </section>
      <section id='expertise'>
        <FieldSection />
      </section>
      <Box mt={6} />
      <section id='journey'>
        <WorkSection />
      </section>
      <Box mt={6} />
      <section id='projects'>
        <ProjectSection />
      </section>
    </Box>
  );
};

export default MainComponent;
