const express = require('express');
const connectDB = require('./config/db');
const axios = require('axios');
// const randomstring = require('randomstring');
const app = express();

// Connect to database
connectDB();

app.use(express.json());

// Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

const longUrl = 'https://github.com/git-lfs/git-lfs/issues/4320';
const baseUrl = 'http://localhost:5000';

axios.post(`${baseUrl}/api/url/shorten`, { longUrl })
  .then(response => {
    console.log(`Long URL: ${longUrl}`);
    console.log(`Short URL: ${response.data.shortUrl}`);
  })
  .catch(error => {
    console.error(`Error: ${error.response.data}`);
  });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
