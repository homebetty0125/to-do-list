const express = require('express');
const ToDoList = require('../controllers/toDoList.controller');
const router = express.Router();

//
router.post('/createToDoList', ToDoList.create);

module.exports = router;
