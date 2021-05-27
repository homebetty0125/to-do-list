const db = require('../models');
const ToDoList = db.toDoLists;

const response = {
    result: 1,
    message: '',
    data: {},
};

// 新增
const create = ({ body }, res) => {

    // console.log('req:', req);
    // console.log('res:', res);

    // if (!req.body.title) {

    //     res.status(400).send({ message: 'Content can not be empty!' });
    //     return;

    // }

    ToDoList.create(body, (err, docs) => {

        console.log('docs:', docs);
        res.json({
            ...response,
            // data: {
            //     id: 111111111,
            // },
        });

    });

};

// const update = async (res, req) => {

//     return await Users.find(resCallback({ req, type: 'list' }));

// };

module.exports = {
    create,
    // update,
    // remove,
    // removeAll,
    // findAll,
    // findOne,
};

/**
 * [mongoose]
 *      https://github.com/bezkoder/node-express-mongodb/blob/master/app/controllers/tutorial.controller.js
 */
