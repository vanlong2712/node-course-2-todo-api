var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongo');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => res.status(400).send(e));
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      res.status(404).send();
    }

    res.send({todo});
  }).catch((e) => res.send());
  //valid id using isValid
  //404 - send back empty send

  // findById
    // success case
      // if todo - send it back
      // if no todo - send back 404 with empty body
    //error case
      //400 - and send empty body back
});

app.listen(port, () => console.log(`Starting on port {port}`));

module.exports = {app};
