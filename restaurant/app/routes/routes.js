/*============================<<< routes.js >>>==============================*/

/*  Routes wrapped in function takes Express instance & database as arguments.*/ 

// Testing POST: curl -XPOST -d "title"="string1" -d "body"="string2" http://localhost:8000/notes

module.exports = function(app, db) {
    // CREATE routes
    function insert(req, res) {
        // parse incoming body and save to db
        console.log(req.body.name);
        var dbo = db.db("easybites");
        var myobj = {name: req.body.name, value: req.body.radio1 };
        dbo.collection("Pizzaaa").insertOne(myobj, function(err, res) {
            if(err) throw err;
            console.log("Document inserted!");
            
        });
    }

};
    
    

//	// READ routes
//	app.get('/', (req, res) => {
//		res.sendFile('index.html');
//	});
//	app.get('/restaurants', (req, res) => {
//		const query = {};
//		db.collection('restaurants').findOne(query, (err, item) => {
//		if (err) {
//			res.send({'error':'An error has occurred'});
//		} else {
//			res.send(item);
//		}
//	});

        // app.get('/easybites', (req, res) => {
            
        //     const id = req.params.restID;
        //     const query = {};
        //     db.collection('API').findOne(query, (err, item) => {
        //         if (err) {
        //             res.send({'error':'An error has occurred'});
        //         } else {
        //             res.send(item);
        //         }
        //     });
        // });

        // // // UPDATE route
        // app.put('/restaurants/:id', (req, res) => {
        //     const id = req.params.id;
        //     const details = { '_id': new ObjectID(id) };
        //     const note = { text: req.body.body, title: req.body.title };
        //     db.collection('restaurants').update(details, note, (err, result) => {
        //         if (err) {
        //             res.send({'error':'An error has occurred'});
        //         } else {
        //             res.send(note);
        //         } 
        //     });
        // });

        // // DELETE route
        // app.delete('/restaurants/:restid', (req, res) => {
        //     const id = req.params.id;
        //     const query = { '_id': new ObjectID(id) };
        //     db.collection('restaurants').remove(query, (err, item) => {
        //         if (err) {
        //             res.send({'error':'An error has occurred'});
        //         } else {
        //             res.send('Restaurant ' + id + ' deleted!');
        //         } 
        //     });
        // });

