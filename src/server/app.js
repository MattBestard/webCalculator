const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/../client/public"));

app.get('/api/add', (req, res) => {
  // Route for addition
  res.send("Add");
});

app.get('/api/subtract', (req, res) => {
  // Route for subtraction
  res.send("Subtract");
});

app.get('/api/multiply', (req, res) => {
  // Route for multiplication
  res.send("Multiply");
});

app.get('/api/divide', (req, res) => {
  // Route for division
  res.send("Divide");
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
