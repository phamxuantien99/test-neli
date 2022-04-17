const express = require("express");
const {
  getToDoList,
  getDetailToDo,
  createToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/toDo.controller.jsx");
const { checkEmty } = require("../middlewares/validation/toDo.validations.jsx");
const toDoRouter = express.Router();

toDoRouter.get("/", getToDoList);

toDoRouter.get("/:id", getDetailToDo);

toDoRouter.post("/", checkEmty ,createToDo);

toDoRouter.put("/:id", updateToDo);

toDoRouter.delete("/:id",deleteToDo);

module.exports = toDoRouter;
