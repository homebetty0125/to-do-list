const express = require('express');
const ToDoList = require('../controllers/toDoList.controller');
const router = express.Router();

// toDoList CRUD
router.post('/list', ToDoList.findAll);
router.post('/createToDoList', ToDoList.create);

module.exports = router;

/**
 * Route
 *      https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
 */
