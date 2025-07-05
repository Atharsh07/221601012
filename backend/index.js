    const express = require('express');
    const app = express();
    const shortenerRoutes = require('./routes/shortener');
    const logger = require('./middleware/logger');
    const errorHandler = require('./middleware/errorHandler');
    const port = 3001;
    app.use(express.json());
    app.use(logger);
    const cors = require('cors');
    app.use(cors());
    app.use('/', shortenerRoutes);

    app.use(errorHandler);

    app.listen(port, () => {

    });
