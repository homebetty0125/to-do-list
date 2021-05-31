import React, { createContext, useReducer } from 'react';
import toDoListReducer from './toDoList.reducer';
import Service from '../lib/service';

const initState = {
    list: [],
    formStorage: {},
};

// Create Context
const ToDoListContext = createContext(null);

// Provider
const ToDoListProvider = ({ children }) => {

    const [state, dispatch] = useReducer(toDoListReducer, initState);
    const { list, formStorage } = state;

    const { Provider } = ToDoListContext;

    //
    const getList = async () => {

        const data = await Service.getToDoList();
        return dispatch({ type: 'LIST', payload: data.list });

    };

    //
    const createToDoList = async (reqData) => {

        const data = await Service.createToDoList(reqData);
        return dispatch({ type: 'CREATE', payload: data });

    };

    //
    const updateToDoList = async (reqData) => {

        const data = await Service.updateToDoList(reqData);
        return dispatch({ type: 'UPDATE', payload: data });

    };

    //
    const removeToDoList = async (reqData) => {

        await Service.removeToDoList(reqData);
        return dispatch({ type: 'REMOVE', payload: reqData.id });

    };

    return (

        <Provider value={{
            list,
            formStorage,
            getList,
            createToDoList,
            updateToDoList,
            removeToDoList,
            dispatch,
        }}>
            {children}
        </Provider>

    );

};

export {
    ToDoListContext,
    ToDoListProvider,
};
