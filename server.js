/* Begin mongoDB approach...

mongoose    = require('mongoose');
fs          = require('fs');

var mongoUri = 'mongodb://localhost/rest-1';
mongoose.connect(mongoUri);
var database = mongoose.connection;
database.on('error', function(){
  throw new Error('Cannot connect to database at '+mongoUri);
});
require('./models/people_model');

end mongoDB approach...*/

/*
express used to create a simple server to accept request to
specified endpoints
*/
var express    = require('express');
var path       = require('path');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', routes); //specify route handler for app

app.listen(3001);
console.log('Now listening on port 3001...');
