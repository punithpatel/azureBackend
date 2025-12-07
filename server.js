const express = require("express");
const sequelize = require("./models/index");
const User = require("./models/user");
require("dotenv").config();

const app = express();
app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const { username, password, details } = req.body;

    const newUser = await User.create({
      username,
      password,
      details
    });

    res.status(201).json({ message: "User saved", user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const startServer = async () => {
  try {
    await sequelize.sync();
    console.log("DB synced");

    app.listen(process.env.PORT, () =>
      console.log("Server running on PORT " + process.env.PORT)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
