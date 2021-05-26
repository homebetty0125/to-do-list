const db = require('../models');
const ToDoList = db.toDoLists;

const create = (req, res) => {

    console.log('req:', req);
    console.log('res:', res);

    // ToDoList.create(req, () => {


    // });

};

const update = (req, res) => {


};

const remove = (req, res) => {


};

const removeAll = (req, res) => {


};

const findAll = (req, res) => {


};

const findOne = (req, res) => {


};

module.exports = {
    create,
    update,
    remove,
    removeAll,
    findAll,
    findOne,
};

/**
 * [mongoose]
 *      https://github.com/bezkoder/node-express-mongodb/blob/master/app/controllers/tutorial.controller.js
 */
