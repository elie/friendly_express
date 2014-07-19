var express = require('express'),
path = require('path'),
logger = require('morgan'),
bodyParser = require('body-parser'),
// cookieParser = require('cookie-parser'),
// favicon = require('serve-favicon'),
app = express();

// Middleware
app.set('port', process.env.PORT || 3000); 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(cookieParser());
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
  res.render('index', { title: 'Express', text: 'Let\'s get started' });
});

// Get the server started
app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});