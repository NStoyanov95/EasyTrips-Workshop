const express = require('express');
const handlebarsConfigurator = require('./config/handlebarsConfig');
const expressConfigurator = require('./config/expressConfig');
const routes = require('./route');

app = express();

const PORT = 3030;

handlebarsConfigurator(app);
expressConfigurator(app);
app.use(routes);

app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}...`)});