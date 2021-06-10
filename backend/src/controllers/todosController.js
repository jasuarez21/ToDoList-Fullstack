const TODO = require('../model/todoModel');

function TodosController() {
  async function getAll(req, res) {
    const todos = await TODO.find();
    res.json(todos);
  }
  async function createOne(req, res) {
    const newTask = new TODO(req.body);
    try {
      await newTask.save();
      res.json(newTask);
    } catch (error) {
      res.send(error);
    }
  }
  async function getById(req, res) {
    try {
      const todoById = await TODO.findById(
        req.params.todoById
      );
      res.json(todoById);
    } catch (error) {
      res.send(error);
    }
  }

  async function updateById(req, res) {
    const id = { id: req.params.todoId };
    try {
      const updatedTask = await TODO.findByIdAndUpdate(
        id,
        req.body.task,
        { new: true }
      );
      res.json(updatedTask);
    } catch (error) {
      res.status(404);
      res.send(error);
    }
  }
  async function deleteById(req, res) {
    try {
      await TODO.findByIdAndDelete(req.params.todoId);
      res.json();
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    createOne,
    getById,
    updateById,
    deleteById
  };
}

module.exports = TodosController;
