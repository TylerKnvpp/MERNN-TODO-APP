const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/tasks", { useNewUrlParser: true });
mongoose.connect("mongodb://127.0.0.1:27017/users", { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const todosRouter = require("./routes/todos");
const usersRouter = require("./routes/users");

app.use("/todos", todosRouter);
app.use("/users", usersRouter);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});
