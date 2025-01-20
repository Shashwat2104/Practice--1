const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9 ]+$/, "Please enter a valid name"],
  },
  email: {
    type: String,
    required: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: validatePassword,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
    },
  },
  dateOfBirth: {
    type: Date,
    required: true,
    validate: {
      validator: validateAge,
      message: "Age must be greater than 18",
    },
  },
});

function validatePassword(password) {
  return (
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(){}<>?]/.test(password)
  );
}

function validateAge(dateOfBirth) {
  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();
  return age >= 18;
}

module.exports = mongoose.model("User", userSchema);
