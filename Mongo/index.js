const express = require('require');
const mongoose = require('mongoose');
const dataRoutes = require('./Routes/index')

const app = express();
const port = 70000;

app.use(express.json())
app.use(dataRoutes)

app.listen(port, () => console.log(`port on ${port}`))