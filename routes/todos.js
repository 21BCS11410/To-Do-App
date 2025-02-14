const express = require('express');
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {getTodo, getTodoById} = require("../controllers/getTodo");
const {updateTodoById}  = require("../controllers/updateTodo")
const {deleteTodoById} = require("../controllers/deleteTodo");

//define API routes
router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodosById/:id", getTodoById);
router.put("/updateTodoById/:id", updateTodoById);
router.delete("/deleteTodoById/:id", deleteTodoById);

module.exports = router; 
