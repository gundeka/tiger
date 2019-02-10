var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Greetings from Taiga!');
});

app.listen(3000, function() {
  console.log('Taiga app listening on port 3000!');
})
