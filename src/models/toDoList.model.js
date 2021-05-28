module.exports = (mongoose) => {

    const toDoListSchema = mongoose.Schema(
        {
            title: String,
            description: String,
        },
        {
            timestamps: true, // createdAt, updatedAt
        },
    );

    return mongoose.model('toDoList', toDoListSchema);

};

/**
 * mongoose _id to id
 *      https://grokonez.com/node-js/mongoose-change-_id-to-id-in-returned-response-node-js-express-application-example
 */
