// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Long', age: 25};

var {name} = user; //which means var name = user.name;
var {age} = user; // which means var age = user.age;
console.log(name,age);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	} 
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	//Insert new doc into Users (name,age,location)
	// db.collection('Users').insertOne({
	// 	name: 'Long',
	// 	age: 24,
	// 	location: '253A đồng đen'
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert user',err);
	// 	}

	// 	console.log(result.ops[0]._id.getTimestamp());
	// });

	db.close();
});