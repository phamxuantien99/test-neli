const { getList, getDetail, create, update, deleteById } = require("../services/toDo.services.jsx");




const getToDoList = (req, res) => {
  const toDoList = getList()
  if(toDoList){
    res.status(200).send(toDoList);
  }else{
    res.status(404).send("not found")
  }
};

const getDetailToDo = (req, res) => {
  const { id } = req.params;
  const toDo = getDetail(id)
  if(toDo) {
    res.status(200).send(toDo)
  }else{
    res.status(404).send("not found")
  }
};

const createToDo = (req, res) => {
  let toDo = req.body;
  const newToDo = create(toDo)
  res.status(201).send(newToDo)
};

const updateToDo = (req, res) => {
  const { id } = req.params;
  const {toDo} = req.body;
  
  const toDoUpdated = update(id, toDo);

  if(toDoUpdated) {
    res.status(200).send(toDoUpdated)
  }else{
    res.status(404).send("not Found")
  }
};

const deleteToDo = (req, res) => {
  const { id } = req.params;
  const toDoDeleted = deleteById(id)
  if(toDoDeleted) {
    res.status(200).send(toDoDeleted)
  }else{
    res.status(404).send("not found")
  }
};

module.exports = {
  getToDoList,
  getDetailToDo,
  createToDo,
  updateToDo,
  deleteToDo,
};
