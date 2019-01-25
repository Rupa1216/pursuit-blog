const bodyParser = require('body-parser');
const express = require('express');

const { publicRouter } = require('./backend/routes/publicRoutes');
const { privUserRouter } = require('./backend/routes/privateUserRoutes')

const port = 4000;

const app = express();

// ------------- MIDDLEWARE

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());




// -------------- ROUTES
app.use('/user', publicRouter);
app.use('/user', privUserRouter);

// -------------- SERVER
app.listen(port, () => {
    `Server is listening on port: ${port}`})