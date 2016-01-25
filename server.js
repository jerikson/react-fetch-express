var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//  Allow requests..
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var list = [
    {id: 1, text: "lorem"},
    {id: 2, text: "ipsum"},
    {id: 3, text: "dolor"}
];

app.use(express.static('public'));

app.get('/list', function(req, res) {
    console.log("GET request from server");
    res.send(list);
});

app.get('/', function(req, res) {
  fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(err, data) {
    if (err) console.error(err.stack);
    res.send(data);
  });
});


app.listen(7070);
