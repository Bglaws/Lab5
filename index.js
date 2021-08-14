
var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('./Movies.db');
var fs = require('fs');

let sql = `SELECT * FROM Movies ORDER BY RANDOM() LIMIT 1;`;

// app.get('/Movies/random', function (req, res) {
// 	db.get(sql, (err, row) => {
// 		if (err) {
// 			console.log(err.meassage);
// 			res.send(err.message)
// 		}
// 		res.send(row);
// 	});	
// });

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname})
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

// app.post('/Movies/random', function (req, res) {
	
// });

app.listen(3000);
