const {ObjectID} = require('mongodb');

const {mongoose} = require('./../db/mongo');
const {Todo} = require('./../models/todo');
const {Users} = require('./../models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove()

Todo.findByIdAndRemove('59a5268b98f5b83338351f50').then((todo) => {
  console.log(todo);
});
