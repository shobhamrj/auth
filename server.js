const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
const PORT = process.env.PORT;
const DATABASE_URI = process.env.DATABASE_URI;

mongoose.connect(DATABASE_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(e => {console.log('Error connecting to MongoDB:', e)})


app.use('/', require('./routes/login'));

app.listen(PORT, () => {
    console.log(`Express Server is listening on port ${PORT}`);
});


module.exports = app;
