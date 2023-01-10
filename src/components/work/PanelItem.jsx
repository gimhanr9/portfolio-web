import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

const PanelItem = ({ title, place, startYear, endYear, tasks }) => {
  return (
    <Box>
      <Box>
        <Grid display='flex'>
          <Typography variant='body2'>{title} @&nbsp;</Typography>
          <Typography variant='body2'>{place}</Typography>
        </Grid>
        <Typography variant='caption'>
          {startYear} - {endYear}
        </Typography>
        <Box mt={1} />
        <List>
          {tasks.map((task) => (
            <ListItem>
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PanelItem;
