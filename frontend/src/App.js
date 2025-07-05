import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShortenerPage from './pages/ShortenerPage';
import StatsPage from './pages/StatsPage';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import logger from './logger';

const App = () => {
  logger('App initialized');

  return (
    <Router>
      <AppBar position="static" color="primary">
  <Toolbar>
    <Typography variant="h6" sx={{ flexGrow: 1 }}>
      URL Shortener
    </Typography>
    <Button color="inherit" component={Link} to="/">
      Shorten
    </Button>
    <Button color="inherit" component={Link} to="/stats">
      Statistics
    </Button>
  </Toolbar>
</AppBar>

      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<ShortenerPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
