import React, { useState } from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import URLFormRow from '../components/URLFormRow';
import ShortenResults from '../components/ShortenResults';
import axios from 'axios';

const ShortenerPage = () => {
  const [inputs, setInputs] = useState(
  Array.from({ length: 5 }, () => ({ url: '', shortcode: '', validity: '' }))
);
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleChange = (index, field, value) => {
    const newInputs = [...inputs];
    newInputs[index][field] = value;
    setInputs(newInputs);
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (_) {
      return false;
    }
  };

  const handleSubmit = async () => {
    setErrors([]);
    setResults([]);

    const formErrors = inputs.map((item) => {
      const errs = {};
      if (item.url && !isValidUrl(item.url)) {
        errs.url = 'Invalid URL format';
      }
      if (item.validity && isNaN(item.validity)) {
        errs.validity = 'Validity must be a number';
      }
      if (item.shortcode && !/^[a-zA-Z0-9]+$/.test(item.shortcode)) {
        errs.shortcode = 'Shortcode must be alphanumeric';
      }
      return errs;
    });

    setErrors(formErrors);

    const hasErrors = formErrors.some((e) => Object.keys(e).length > 0);
    if (hasErrors) return;

    const requests = inputs
      .filter((row) => row.url !== '')
      .map((row) =>
        axios
          .post('api/shorten', {
            url: row.url,
            shortcode: row.shortcode || undefined,
            validity: row.validity ? parseInt(row.validity) : undefined,
          })
          .then((res) => ({
            ...res.data,
            originalUrl: row.url,
            expiry: row.validity ? `${row.validity} mins` : '30 mins',
          }))
          .catch((err) => ({
            error: err.response?.data?.error || 'Request failed',
            originalUrl: row.url,
          }))
      );

    const res = await Promise.all(requests);
    setResults(res);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" mt={4} mb={2} align="center">
        URL Shortener
      </Typography>
      <Grid container spacing={2}>
        {inputs.map((row, index) => (
          <URLFormRow
            key={index}
            index={index}
            data={row}
            errors={errors[index] || {}}
            onChange={handleChange}
          />
        ))}
      </Grid>
      <Box textAlign="center" mt={3}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Shorten URLs
        </Button>
      </Box>
      {results.length > 0 && (
        <Box mt={4}>
          <ShortenResults results={results} />
        </Box>
      )}
    </Container>
  );
};

export default ShortenerPage;
