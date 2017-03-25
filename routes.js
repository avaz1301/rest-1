var express = require('express');
var router = express.Router();
var people = require('./controller/people');
var header = {
  'Content-Type': 'application/json',
  'X-Powered-By': 'Angelo Z, Coffee & Music'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index.ejs");
});

/* Handler for GET /people */
router.get('/people', function(req,res){
  console.log("IN GET");
  var resData = people.findAll();
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

/* Handler for POST /people */
router.post('/people', function(req,res){
  console.log("IN POST");
  var resData = people.add(req.body);
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

/* Handler for PUT /people/:name */
router.put('/people/:name', function(req,res){
  console.log("IN PUT");
  var name = req.params.name;
  var newCity = req.body.favoriteCity;
  var resData = people.modify(name, newCity);
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

/* Handler for GET /people/:id */
router.get('/people/:id', function(req,res){
  console.log("IN GET ID");
  var id = parseInt(req.params.id);
  var resData = people.find(id);
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

/* Handler for Delete /people/:id */
router.delete('/people/:id', function(req,res){
  console.log("IN DELETE ID");
  var id = parseInt(req.params.id);
  var resData = people.delete(id);
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

/* Handler for GET /last */
router.get('/last', function(req,res){
  console.log("IN GET LAST");
  var resData = people.last();
  console.log(resData);
  res.writeHead(200, header);
  var resBody = {
    headers: req.headers,
    method: req.method,
    url: req.url,
    body: resData
  };
  res.end(JSON.stringify(resBody));
});

module.exports = router;
