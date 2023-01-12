import { Box, Divider, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import fields from '../../data/fields';
import { Colors } from '../../utils/Colors';
import CommonField from './CommonField';

const FieldSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box display='flex' flexDirection='row' justifyContent='center'>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          divider={
            <Divider
              orientation={isMobile === true ? 'horizontal' : 'vertical'}
              flexItem
            />
          }
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
