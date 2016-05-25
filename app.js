var express = require ('express');

var app = express(); //gives instance of express

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));


app.get('/', function(req, res) {
  res.send('hello world')
});

app.listen(5000, function(err) {
  console.log('running server on port 5000')
});