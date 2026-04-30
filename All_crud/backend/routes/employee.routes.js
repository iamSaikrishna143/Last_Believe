// routes/employee.routes.js
const express = require('express');
const Employee = require('../models/Employee');
const router = express.Router();

/**
 * CREATE
 */
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * READ ALL
 */
router.get('/', async (req, res) => {
  const employees = await Employee.find().sort({ createdAt: -1 });
  res.json(employees);
});

/**
 * READ BY ID
 */
router.get('/:id', async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
});

/**
 * UPDATE
 */
router.put('/:id', async (req, res) => {
  try {
    const updated = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/**
 * DELETE
 */
router.delete('/:id', async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: 'Employee deleted successfully' });
});

module.exports = router;
