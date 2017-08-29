const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongo');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/user');

// var id = '59a51c15f3cab63f8c4ea8c611';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// }

// Todo.find({
//   _id: id
// }).then((todos) => console.log(todos));
//
// Todo.findOne({
//   _id: id
// }).then((todo) => console.log(todo));
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log(todo)
// }).catch((e) => console.log(e));

var id = '59a50131b2cac029a038cd5a';

Users.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(user);
}).catch((e) => console.log(e));
