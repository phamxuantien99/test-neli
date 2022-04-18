const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
} = require("../services/toDo.services.jsx");

const getToDoList = async (req, res) => {
  const toDoList = await getList();
  if (toDoList) {
    res.status(200).send(toDoList);
  } else {
    res.status(404).send("not found");
  }
};

const getDetailToDo = async (req, res) => {
  const { id } = req.params;
  const toDo = await getDetail(id);
  if (toDo) {
    res.status(200).send(toDo);
  } else {
    res.status(404).send("not found");
  }
};

const createToDo = async (req, res) => {
  let toDo = req.body;
  const newToDo = await create(toDo);
  res.status(201).send(newToDo);
};

const updateToDo = async (req, res) => {
  const { id } = req.params;
  const {description,isFinish} = req.body

  const toDoUpdated = await await update(id, description,isFinish)

  if (toDoUpdated) {
    res.status(200).send(toDoUpdated);
  } else {
    res.status(404).send("not Found");
  }
};

const deleteToDo = async (req, res) => {
  const { id } = req.params;
  const toDoDeleted = await deleteById(id);
  if (toDoDeleted) {
    res.status(200).send(toDoDeleted);
  } else {
    res.status(404).send("not found");
  }
};

module.exports = {
  getToDoList,
  getDetailToDo,
  createToDo,
  updateToDo,
  deleteToDo,
};
