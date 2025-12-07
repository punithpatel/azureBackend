const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  details: {
    type: DataTypes.STRING
  }
});

module.exports = User;
