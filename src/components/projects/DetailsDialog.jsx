import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label='close'
          onClick={onClose}
          color='primary'
          sx={{
            position: 'absolute',
            right: 8,
            top: 12,
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const DetailsDialog = ({ open, title, details, link, close }) => {
  const handleClose = () => {
    close();
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby='customized-dialog-title'
        open={open}
      >
        <BootstrapDialogTitle
          id='customized-dialog-title'
          onClose={handleClose}
        >
          {title}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {details.map((detail) => (
            <Box mb={2}>
              <Typography variant='body2'>{detail}</Typography>
            </Box>
          ))}
        </DialogContent>
        <DialogActions>
          <Box display='flex' justifyContent='center'>
            <Button
              variant='outlined'
              target='_blank'
              href={link}
              startIcon={<GitHubIcon />}
              size='small'
              sx={{ borderRadius: 20 }}
              fullWidth
            >
              Github
            </Button>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default DetailsDialog;
