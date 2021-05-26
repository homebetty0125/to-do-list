module.exports = (mongoose) => {

    const toDoListSchema = mongoose.Schema(
        {
            title: String,
            description: String,
        },
        { timestamps: true },
    );

    toDoListSchema.method('toJSON', () => {

        const { __v, _id, ...obj } = this.toObject();
        obj.id = _id;
        return obj;

    });

    const ToDoList = mongoose.model('toDoList', toDoListSchema);

    return ToDoList;

};
