import { useState } from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import RoundedButton from '../common/RoundedButton';
//import { useCountdown } from './../../hooks/useCountDown';
import isEmail from 'validator/lib/isEmail';
import emailjs from '@emailjs/browser';

const ContactComponent = () => {
  //const seconds = useCountdown(30);
  const [errorText, setErrorText] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [loading, setLoading] = useState(false);

  const closeSuccessMessage = () => {
    setSuccessMessage(false);
  };
  const closeErrorMessage = () => {
    setErrorMessage(false);
  };

  const handleNameChange = (event) => {
    setValues({ ...values, name: event.target.value });
    if (event.target.value === '') {
      setErrorText({ ...errorText, name: "Name can't be empty" });
    } else {
      setErrorText({ ...errorText, name: '' });
    }
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, email: event.target.value });
    if (!isEmail(event.target.value)) {
      setErrorText({ ...errorText, email: 'Invalid email' });
    } else {
      setErrorText({ ...errorText, email: '' });
    }
  };

  const handleMessageChange = (event) => {
    setValues({ ...values, message: event.target.value });
    if (event.target.value === '') {
      setErrorText({ ...errorText, message: "Message can't be empty" });
    } else {
      setErrorText({ ...errorText, message: '' });
    }
  };
  const validateAndSendMessage = () => {
    if (values.name === '') {
      setErrorText({ ...errorText, name: "Name can't be empty" });
    } else {
      setErrorText({ ...errorText, name: '' });
    }
    if (values.email === '') {
      setErrorText({ ...errorText, email: "Email can't be empty" });
    } else {
      setErrorText({ ...errorText, email: '' });
    }
    if (values.message === '') {
      setErrorText({ ...errorText, message: "Message can't be empty" });
    } else {
      setErrorText({ ...errorText, message: '' });
    }
    if (!isEmail(values.email)) {
      setErrorText({ ...errorText, email: 'Invalid email' });
    } else {
      setErrorText({ ...errorText, email: '' });
    }
    if (
      values.name !== '' &&
      values.email !== '' &&
      isEmail(values.email) &&
      values.message !== ''
    ) {
      setErrorText({
        name: '',
        email: '',
        message: '',
      });
      var templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      setLoading(true);
      emailjs
        .send(
          process.env.REACT_APP_EMAIL_SERVICE_ID,
          process.env.REACT_APP_EMAIL_TEMPLATE_ID,
          templateParams,
          process.env.REACT_APP_EMAIL_PUBLIC_KEY
        )
        .then(
          (result) => {
            setValues({
              name: '',
              email: '',
              message: '',
            });
            setLoading(false);
            setErrorMessage(false);
            setSuccessMessage(true);
          },
          (error) => {
            setLoading(false);
            setSuccessMessage(false);
            setErrorMessage(true);
          }
        );
    }
  };
  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box display='flex' justifyContent='center' pt={2} pb={8}>
        <Box p={5} sx={{ bgcolor: 'background.secondary', minWidth: '40%' }}>
          <Typography variant='h5' align='center' color='text.primary'>
            Send a message
          </Typography>
          {successMessage === true ? (
            <Box mt={3}>
              <Alert
                onClose={() => {
                  closeSuccessMessage();
                }}
                variant='filled'
                severity='success'
              >
                Message sent successfully!
              </Alert>
            </Box>
          ) : null}
          {errorMessage === true ? (
            <Box mt={3}>
              <Alert
                onClose={() => {
                  closeErrorMessage();
                }}
                variant='filled'
                severity='error'
              >
                Could not send message!
              </Alert>
            </Box>
          ) : null}
          <Box mt={3} />
          <Typography variant='body2' color='text.secondary'>
            Name
          </Typography>
          <TextField
            required
            error
            value={values.name}
            variant='outlined'
            size='small'
            fullWidth
            onChange={handleNameChange}
            helperText={errorText.name}
          />
          <Box mt={2} />
          <Typography variant='body2' color='text.secondary'>
            Email
          </Typography>
          <TextField
            required
            error
            value={values.email}
            variant='outlined'
            size='small'
            fullWidth
            onChange={handleEmailChange}
            helperText={errorText.email}
          />
          <Box mt={2} />
          <Typography variant='body2' color='text.secondary'>
            Message
          </Typography>
          <TextField
            required
            error
            value={values.message}
            variant='outlined'
            multiline
            rows={8}
            fullWidth
            onChange={handleMessageChange}
            helperText={errorText.message}
          />
          <Box mt={4} />
          <Box display='flex' justifyContent='center'>
            {loading === false ? (
              <RoundedButton
                text={'Send message'}
                functionality={validateAndSendMessage}
              />
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default ContactComponent;
