/*============================================================================*/
/*============================<<< server.js >>>===============================*/
/*============================================================================*/

const express		= require('express');
const MongoClient	= require('mongodb').MongoClient;
const bodyParser	= require('body-parser');
const db			= require('./public/config/db');

const app			= express();
const port			= 8000;

// Trash Maybe???????
//var reader = require('./public/routes/fileRead')


// Parse URL encoded forms ie. curl HTTP requests
app.use(bodyParser.json());								//support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));		//support URL-encoded bodies
require('./app/routes')(app, {});	// Needs to come after body-parser!!


// Serve static assets from public folder
app.use(express.static('public'));				
app.use(express.static('public/assets'));
app.use(express.static(__dirname+'/'));


/*============================================================================*/
/*============================<<< Mongo Client >>>============================*/
/*============================================================================*/

//On Linux:  sudo service mongod start
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    const dbo = database.db("easybites");
    
    // Needs to come after body-parser!!
    require('./app/routes')(app, dbo);	
    
/*============================<<< CREATE Routes >>>============================*/

	// POST Order to Database
	app.post('/addOrder/:rID', (req, res) => {
		console.log(req.body);
		const order = { 'custID': req.body.custID, 'restID': parseInt(req.body.restID),
		'orderID': parseInt(req.body.orderID), 'groupSize': parseInt(req.body.groupSize),
		'table': req.body.table, 'order': req.body.order,
		 };
 
		dbo.collection('ordersAPI').insert( order, (err, result) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.send(result.ops[0]);
			}
		});
	});


/*=======================<<< READ Routes >>>==================================*/

    // GET the index page
    app.get('/', function(req, res) {	
    	res.status(200).sendfile('./public/index.html');
	});


	// GET an array of restaurants
	app.get('/restaurants', (req, res) => {
		dbo.collection('restaurantsAPI').find().toArray( (err, item) => {
			console.log(JSON.stringify(req.query.restaurantAPI))
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.status(200).send(item);
			}
		});
	});
    
    // GET restaurant by restaurant ID -- restID
	app.get('/restaurants/:rID', (req, res) => {
		const query = {'restID' : parseInt(req.params.rID)}
		dbo.collection('restaurantsAPI').findOne( query, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.status(200).send(item);
			}
		});
	});
    
	// GET all orders
	app.get('/orders', (req, res) => {
		dbo.collection('ordersAPI').find().toArray( (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.status(200).send(item);
			}
		});
	});
	
/*=======================<<< UPDATE Routes >>>================================*/

	app.put('/update/:oID', 
		function (req, res, next) {
			const oIDQuery = {'orderID': parseInt(req.params.oID)};
			console.log("test")
			
			const change = { 'custID': req.body.custID, 
				'restID': parseInt(req.body.restID),
				'orderID': parseInt(req.body.orderID), 
				'groupSize': parseInt(req.body.groupSize),
				'table': parseInt(req.body.table), 
				'order': parseInt(req.body.order)
		 };
			dbo.collection('ordersAPI').update(oIDQuery, change, (err, item) => {
				if(err) throw err;
				res.send(change);
			});
		}
	);
	
/*=======================<<< DELETE Routes >>>================================*/
	
	// DELETE order by Order ID -- orderID
	app.delete('/remove/:oID', (req, res) => {
		ordID = parseInt(req.params.oID, 10);
		const details = { 'orderID': ordID};
		dbo.collection('ordersAPI').remove(details, (err, item) => {
			if (err) {
				res.send({'error':'An error has occurred'});
			} else {
				res.status(204).send("[Order:" + ordID + "]  is Fulfilled.");
			}
		});
	});

	
/*============================================================================*/
/*=======================<<< PORT Listen >>>==================================*/    
/*============================================================================*/
  
	app.listen(port, () => {
        console.log('Listening on Port: ' + port);
    });               
}) 


/*============================<<< END >>>=====================================*/

