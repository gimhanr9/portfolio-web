import { Box, Divider, Stack } from '@mui/material';
import fields from '../../data/fields';
import CommonField from './CommonField';

const FieldSection = () => {
  return (
    <Box>
      <Stack
        direction='row'
        divider={<Divider orientation='vertical' flexItem />}
      >
        {fields.map((field) => (
          <Box xs={4}>
            <CommonField
              icon={field.icon}
              title={field.title}
              description={field.description}
              technologies={field.technologies}
              tools={field.tools}
            />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FieldSection;
