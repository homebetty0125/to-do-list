const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('./src/models');
const toDoListRouter = require('./src/routes/toDoList.route');

const app = express();
const PORT = process.env.PORT || 8080;

// 允許網域
const allowLists = [
    'http://localhost:10526',
];

// 跨瀏覽器設定
const corsOptions = {
    credentials: true,
    origin: (origin, callback) => {

        let options;

        if (allowLists.indexOf(origin) !== -1) options = { origin: true };
        else options = { origin: false };
        callback(null, options);

    },
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .then(() => {

        console.log('Connected to the db!');

    })
    .catch((err) => {

        console.log('Cannot connect to the db...', err);
        process.exit();

    });

// simple route
app.get('/', (req, res) => {

    const obj = {
        result: 1,
        message: 'Welcome to betty\'s application.',
        data: {},
    };

    res.json(obj);

});

app.use('/api', toDoListRouter);

// set port, listen for requests
// app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
app.listen(PORT);

/**
 * [node.js + express + mongoose + React]
 *      https://github.com/bezkoder/node-express-mongodb
 *      https://bezkoder.com/react-node-express-mongodb-mern-stack
 *      https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
 */
