const express = require('express');
const cakesApiRouter = require('./routes/api/cakes');
const mongoConnect = require('./lib/mongo');

//Mongo connection
mongoConnect();

const app = express();

app.use(express.json());

app.use('/cakes', cakesApiRouter);

//Server
const server = app.listen(3050, () => {
    console.log(`Listening localhost: ${server.address().port }`);
});
