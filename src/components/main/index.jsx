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

      <section id='journey'>
        <WorkSection />
      </section>

      <section id='projects'>
        <ProjectSection />
      </section>
    </Box>
  );
};

export default MainComponent;
