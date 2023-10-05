const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
      },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true,
      },

    qualification: {
        type: String,
        enum: ['School', 'Graduation', 'Post Graduation'],
        required: true,
      },

    mobileNumber: {
        type: String,
        required: true,
      },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    confirmPassword: {
        type: String,
        required: true,
      },

    city: {
        type: String,
        required: true,
      },

    state: {
        type: String,
        required: true,
      }
})

module.exports = mongoose.model("Employee", employeeSchema);