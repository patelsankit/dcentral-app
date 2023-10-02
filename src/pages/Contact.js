import React from 'react';
import { Container, Paper, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="sm" mt={5}>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
        <form>
          <TextField
            label="Your Name"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Message"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
            required
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;
