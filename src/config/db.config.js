const url = {
    dev: '192.168.1.65:27017',
    local: 'localhost',
};

module.exports = {
    url: `mongodb://${url.local}/toDoList`,
};
