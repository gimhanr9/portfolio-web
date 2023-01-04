import { Box } from '@mui/material';
import AboutSection from '../about';
import FieldSection from '../fields';
import WorkSection from '../work';

const MainComponent = () => {
  return (
    <Box>
      <AboutSection />
      <FieldSection />
      <WorkSection />
    </Box>
  );
};

export default MainComponent;
