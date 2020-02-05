const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      minLength: 3
    },
    name: {
      type: String,
      unique: true,
      trim: true,
      minLength: 3
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      minLength: 3
    },
    incompleteTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDo" }],
    completeTodos: [{ type: mongoose.Schema.Types.ObjectId, ref: "ToDo" }]
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
