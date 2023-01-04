import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import TabPanel from '../common/TabPanel';

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
};

const WorkSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant='h6' align='center'>
        Education and career journey
      </Typography>
      <Box
        mt={6}
        sx={{
          flexGrow: 1,
          bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'center',
          height: 224,
        }}
      >
        <Tabs
          orientation='vertical'
          variant='scrollable'
          value={value}
          onChange={handleChange}
          aria-label='Vertical tabs example'
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label='Item One' {...a11yProps(0)} />
          <Tab label='Item Two' {...a11yProps(1)} />
          <Tab label='Item Three' {...a11yProps(2)} />
          <Tab label='Item Four' {...a11yProps(3)} />
          <Tab label='Item Five' {...a11yProps(4)} />
          <Tab label='Item Six' {...a11yProps(5)} />
          <Tab label='Item Seven' {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </Box>
    </Box>
  );
};

export default WorkSection;
