var express = require('express'),
	app = express(),
	port = process.env.PORT || 5000,
	mongoose = require('mongoose'),
	GiftCard = require('./api/models/giftCardModel'),
	LoyaltyCard = require('./api/models/loyaltyCardModel'),
	Transaction = require('./api/models/transactionModel'),
	bodyParser = require('body-parser'),
	expressValidator = require('express-validator'),
	basicAuth = require('express-basic-auth');

var routes = require('./api/routes/CardRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://coregiftcard:Tralala*0@ds131763.mlab.com:31763/coregiftcard');
//mongoose.connect('mongodb://localhost/coregiftcard')

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
	response.render('public/index');
});

app.get('/docs', function(request, response) {
	response.sendFile(__dirname + '/public/documentacao.html');
});

app.get('/teste', function(request, response) {
	response.sendFile(__dirname + '/public/documentacao.html');
});


app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());

app.use(expressValidator());

routes(app);

app.listen(port);

console.log('Coregiftcard Mock API started on: ' + port);
