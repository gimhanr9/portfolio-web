import { Box, Divider, Stack } from '@mui/material';
import fields from '../../data/fields';
import { Colors } from '../../utils/Colors';
import CommonField from './CommonField';

const FieldSection = () => {
  return (
    <Box>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={<Divider orientation='vertical' flexItem />}
          sx={{
            border: `1px solid ${Colors.divider}`,
            borderRadius: '16px',
            width: '88%',
          }}
        >
          {fields.map((field, index) => (
            <Box key={index}>
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
    </Box>
  );
};

export default FieldSection;
