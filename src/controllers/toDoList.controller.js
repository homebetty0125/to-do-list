const db = require('../models');
const ToDoList = db.toDoLists;

// 整理回傳格式
const resCallback = (res, type) => {

    let data = {};

    switch (type) {
        case 'list':
            data = {
                list: res.map((d) => {

                    const { _id, __v, createdAt, updatedAt, ...o } = d._doc;
                    o.id = _id;
                    return o;

                }),
            };
            return data;

        case 'remove':
            data = {};
            return data;

        default:
            const { _id, __v, createdAt, updatedAt, ...obj } = res;

            data = {
                ...obj,
                id: _id,
            };
            break;
    }

    return {
        result: 1,
        message: '',
        data,
    };

};

// 列表
const findAll = (req, res) => {

    ToDoList.find()
        .then((data) => res.send(resCallback(data, 'list')));

};

// 新增
const create = async ({ body }, res) => {

    await ToDoList.create(body, (err, docs) => {

        res.send(resCallback(docs._doc));

    });

};

// const update = async (res, req) => {

//     return await Users.find(resCallback({ req, type: 'list' }));

// };

module.exports = {
    findAll,
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
