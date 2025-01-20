const User = require("../models/userModel.js");

console.log(User);
const signup = async (req, res) => {
  try {
    const { email, password, name, dateOfBirth } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("User already exists");
    }

    const newUser = new User({
      email,
      password,
      name,
      dateOfBirth,
    });
    await newUser.save();
    res
      .status(201)
      .send({ data: newUser, message: "User created successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { signup };
