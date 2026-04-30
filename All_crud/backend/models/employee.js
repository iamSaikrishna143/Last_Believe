// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true,
    match: [/^[0-9]{6}$/, 'Pincode must be 6 digits']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  mobile: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, 'Mobile must be 10 digits']
  },
  department: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true,
    min: 1
  }
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
