const toDoListReducer = (state, { type, payload }) => {

    // console.log('reducer payload:', payload)

    switch (type) {
        case 'LIST':
            return {
                ...state,
                list: payload,
            };

        case 'CREATE':
            return {
                ...state,
                list: [...state.list, { ...payload }],
            };

        case 'UPDATE':
            return {
                ...state,
                list: state.list.map((obj) => {

                    if (obj.id === payload.id) obj = payload;
                    return obj;

                }),
            };

        case 'REMOVE':
            return {
                ...state,
                list: state.list.filter(({ id }) => id !== payload),
            };

        case 'FORM':
            return {
                ...state,
                formStorage: payload,
            };

        default:
            return { ...state };

    }
};

export default toDoListReducer;
