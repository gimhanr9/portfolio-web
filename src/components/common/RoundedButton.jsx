import { Button } from '@mui/material';

const RoundedButton = ({ text, functionality }) => {
  return (
    <Button
      variant='outlined'
      onClick={() => {
        functionality();
      }}
    >
      {text}
    </Button>
  );
};

export default RoundedButton;
