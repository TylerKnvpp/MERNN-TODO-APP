const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Todo = new Schema(
  {
    todo_description: {
      type: String
    },
    todo_responsible: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    todo_priority: {
      type: String
    },
    todo_completed: {
      type: Boolean
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDo", Todo);
