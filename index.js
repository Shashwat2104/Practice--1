const express = require("express");
const connectDB = require("./config/db.js");
const userRoute = require("./routes/userRoute")

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.send("Hello World");
    console.log("My first test API is working");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.use("/api", userRoute);

app.listen(8000, async () => {
  try {
    await connectDB();
    console.log("Listening on port 8000");
  } catch (error) {
    console.error("Server failed to start");
  }
});
