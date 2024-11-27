import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import emailjs from 'emailjs-com';

const useStyles = makeStyles({
  containerWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '16px',
    paddingTop: '15px',
  },
  bodyContainer: {
    width: '100%',
    padding: '16px',
    maxWidth: '560px',
    textAlign: 'left',
  },
  contactContainer: {
    width: '100%',
    padding: '16px',
    textAlign: 'left',
    backgroundColor: '#1C1C22',
    color: '#D8DBE2',
    borderRadius: '8px',
  },
  formContainer: {
    padding: '16px',
    backgroundColor: '#1C1C22',
    color: '#D8DBE2',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    maxWidth: '560px',
    margin: '16px auto',
  },
  formField: {
    marginBottom: '16px',
    '& .MuiInputBase-root': {
      color: '#D8DBE2',
    },
    '& .MuiInputLabel-root': {
      color: '#A9BCD0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#58A4B0',
    },
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#81B0C0',
    },
  },
  submitButton: {
    backgroundColor: '#58A4B0',
    color: '#FFF',
    '&:hover': {
      backgroundColor: '#81B0C0',
    },
  },
  statusMessage: {
    marginTop: '16px',
    fontSize: '14px',
  },
});

function Contact() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'YOUR_SERVICE_ID', //  EmailJS service ID
        'YOUR_TEMPLATE_ID', //  EmailJS template ID
        formData,
        'YOUR_USER_ID' //  EmailJS user ID
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', mobile: '', message: '' });
      })
      .catch(() => setStatus('Failed to send message.'));
  };

  return (
    <div className={classes.containerWrapper}>
      {/* Contact Details Section */}
      <Container className={classes.contactContainer}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="subtitle1">Email: Brayden.William.Thomas@gmail.com</Typography>
        <Typography variant="subtitle1">Mobile: +61 484 339 787</Typography>
        <Typography variant="subtitle1">LinkedIn: linkedin.com/in/brayden-w-thomas</Typography>
        <Typography variant="subtitle1">GitHub: github.com/BraydenWThomas</Typography>
      </Container>

      {/* Contact Form Section */}
      <Container className={classes.formContainer}>
        <Typography variant="h5" gutterBottom>
          Send me a message
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            className={classes.formField}
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.formField}
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextField
            className={classes.formField}
            fullWidth
            label="Mobile"
            name="mobile"
            type="tel"
            variant="outlined"
            value={formData.mobile}
            onChange={handleChange}
          />
          <TextField
            className={classes.formField}
            fullWidth
            label="Message"
            name="message"
            variant="outlined"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Grid container justifyContent="flex-end">
            <Button type="submit" variant="contained" className={classes.submitButton}>
              Send
            </Button>
          </Grid>
        </form>
        {status && (
          <Typography
            className={classes.statusMessage}
            style={{ color: status.includes('success') ? '#58A4B0' : '#D8DBE2' }}
          >
            {status}
          </Typography>
        )}
      </Container>
    </div>
  );
}

export default Contact;
