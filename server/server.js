const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

require('dotenv').config();


app.get('/api', (req, res) => {
    // res.send('response from my server')
    // otherwise go get omdb data
  axios.get(`http://www.omdbapi.com${  req.url  }&apikey=${  process.env.API_KEY}`)
    .then((r) => {
      res.json(r.data);
    })
    .catch((e) => {
      res.send(e.message);
    });
});

module.exports = app;
