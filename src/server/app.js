const morgan = require('morgan');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(express.static(__dirname + "/../client/public"));

app.post('/api/add', (req, res) => {
  // Route for addition
  const answer = (req.body.firstNum) + (req.body.secondNum);
  res.json({response: answer});
});

app.post('/api/subtract', (req, res) => {
  // Route for subtraction
  const answer = (req.body.firstNum) - (req.body.secondNum);
  res.json({response: answer});
});


app.post('/api/multiply', (req, res) => {
  // Route for multiplication
  const answer = (req.body.firstNum) * (req.body.secondNum);
  res.json({response: answer});
});

app.post('/api/divide', (req, res) => {
  // Route for division
  const answer = (req.body.firstNum) / (req.body.secondNum);
  res.json({response: answer});
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
