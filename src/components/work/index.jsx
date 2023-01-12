import { Box, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import work from '../../data/work';
import TabPanel from '../common/TabPanel';
import PanelItem from './PanelItem';

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
    <Box sx={{ bgcolor: 'background.secondary' }}>
      <Box pt={8} pb={8}>
        <Typography variant='h5' align='center' color='text.primary'>
          Education and career journey
        </Typography>
        <Box
          display='flex'
          justifyContent='center'
          sx={{ paddingTop: 5, paddingBottom: 5 }}
        >
          <Box sx={{ width: '88%' }}>
            <Box sx={{ display: { md: 'none' } }}>
              <Box
                mt={3}
                sx={{
                  borderBottom: 1,
                  borderColor: 'divider',
                  maxWidth: '100%',
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='Vertical tabs example'
                  variant='scrollable'
                  scrollButtons={false}
                  textColor='tertiary'
                  indicatorColor='secondary'
                >
                  {work.map((item, index) => (
                    <Tab label={item.tabLabel} {...a11yProps(index)} wrapped />
                  ))}
                </Tabs>
              </Box>
              {work.map((item, index) => (
                <TabPanel value={value} index={index} key={index}>
                  <PanelItem
                    title={item.title}
                    place={item.place}
                    startYear={item.startYear}
                    endYear={item.endYear}
                    tasks={item.tasks}
                  />
                </TabPanel>
              ))}
            </Box>

            <Box
              mt={3}
              sx={{
                flexGrow: 1,
                bgcolor: 'background.paper',
                height: 224,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Tabs
                orientation='vertical'
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='auto'
                aria-label='Vertical tabs example'
                sx={{ borderRight: 1, borderColor: 'divider', width: '50%' }}
                textColor='tertiary'
                indicatorColor='secondary'
              >
                {work.map((item, index) => (
                  <Tab label={item.tabLabel} {...a11yProps(index)} />
                ))}
              </Tabs>
              {work.map((item, index) => (
                <TabPanel value={value} index={index} key={index}>
                  <PanelItem
                    title={item.title}
                    place={item.place}
                    startYear={item.startYear}
                    endYear={item.endYear}
                    tasks={item.tasks}
                  />
                </TabPanel>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkSection;
