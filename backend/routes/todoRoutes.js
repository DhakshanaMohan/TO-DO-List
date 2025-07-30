const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

router.post('/add', async (req, res) => {
  try {
    const todo = new Todo({ task: req.body.task });
    const saved = await todo.save();
    res.json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/update/:id', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;