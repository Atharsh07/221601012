const express = require('express');
const path = require('path');
const cors = require('cors');
const shortenerRoutes = require('./routes/shortener');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.use(express.json());

app.use(logger);

app.use('/api', shortenerRoutes);

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use(errorHandler);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
