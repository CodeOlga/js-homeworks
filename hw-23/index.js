const express = require("express");
const TodoModel = require("./mongo/todo.model");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://olgakrv:5UrBJ82OnKlMc1GQ@olga.hvvdpgf.mongodb.net/?retryWrites=true&w=majority&appName=Olga"
);

connect.then(() => console.log("Connected!"));

app.use(cors());
app.use(express.json());

app.listen(8080, () => {
  console.log("Server is running on localhost:8080...");
});

app.get("/todos", (req, res) => {
  TodoModel.find().then((response) => res.send(response));
});

app.post("/todos", (req, res) => {
  const todo = new TodoModel(req.body);
  todo.save().then((response) => res.send(response));
});

app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.deleteOne({ _id: id }).then((response) => {
    if (response.deletedCount === 0) {
      res.status(404).send({ message: "Todo were not found" });
    } else {
      res.status(200).send(response);
    }
  });
});

app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  TodoModel.updateOne({ _id: id }, req.body)
    .then(() => TodoModel.findById(id))
    .then((response) => res.status(200).send(response));
});
