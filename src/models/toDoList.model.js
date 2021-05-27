module.exports = (mongoose) => {

    const toDoListSchema = mongoose.Schema(
        {
            title: String,
            description: String,
        },
        { timestamps: true },
    );

    toDoListSchema.method('transform', () => {

        const { __v, _id, ...obj } = this.toObject();
        obj.id = _id;
        return obj;

    });

    const ToDoList = mongoose.model('toDoList', toDoListSchema);

    return ToDoList;

};

/**
 * mongoose _id to id
 *      https://grokonez.com/node-js/mongoose-change-_id-to-id-in-returned-response-node-js-express-application-example
 */
