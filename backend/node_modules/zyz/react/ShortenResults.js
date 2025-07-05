import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
} from '@mui/material';

const ShortenResults = ({ results }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shortened URL Results
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="shortened urls table">
          <TableHead>
            <TableRow>
              <TableCell>Original URL</TableCell>
              <TableCell>Short URL</TableCell>
              <TableCell>Expiry</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.originalUrl}</TableCell>
                <TableCell>
                  {row.shortUrl ? (
                    <Link href={row.shortUrl} target="_blank" rel="noopener">
                      {row.shortUrl}
                    </Link>
                  ) : (
                    '—'
                  )}
                </TableCell>
                <TableCell>{row.expiry || '30 mins'}</TableCell>
                <TableCell style={{ color: row.error ? 'red' : 'green' }}>
                  {row.error ? row.error : 'Success'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ShortenResults;
