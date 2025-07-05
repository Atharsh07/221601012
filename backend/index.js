    const express = require('express');
    const app = express();
    const shortenerRoutes = require('./routes/shortener');
    const logger = require('./middleware/logger');
    const errorHandler = require('./middleware/errorHandler');
    const port = 3001;
    app.use(express.json());
    app.use(logger);

    app.use('/', shortenerRoutes);

    app.use(errorHandler);

    app.listen(port, () => {
        console.log("Server is running on : " + `${port}`)
    });
