const mongoose = require('mongoose');

const TodosSchema = mongoose.Schema({
  id: Number,
  task: String
});

module.exports = mongoose.model('Todos', TodosSchema);
