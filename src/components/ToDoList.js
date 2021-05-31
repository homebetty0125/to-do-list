import React, { useEffect, useState, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { ToDoListContext } from '../context/toDoList.state';

// css
const useStyles = createUseStyles({
    row: {
        border: '1px solid gray',
        marginBottom: '20px',
        padding: '16px',
        '& h3': {
            margin: '0 0 8px 0',
        }
    },
    actions: {
        '& button': {
            fontSize: '16px',
            color: '#FFF',
            backgroundColor: 'red',
            border: 0,
            padding: '4px 12px',
            cursor: 'pointer',
        },
        '& .btn-update': {
            backgroundColor: 'blue',
            marginRight: '10px',
        },
    },
});

//
const ToDoList = () => {

    // Context
    const {
        list,
        getList,
        updateToDoList,
        removeToDoList,
        dispatch,
    } = useContext(ToDoListContext);

    const classes = useStyles();

    useEffect(() => {

        getList();

    }, []);

    // 編輯
    const btnUpdate = (reqData) => {

        dispatch({ type: 'FORM', payload: reqData });

    };

    // 刪除
    const btnDelete = (id) => {

        const yes = window.confirm(`確定要刪除${id}？`);
        if (yes) removeToDoList({ id });

    };

    return (

        <div className={classes.toDoListWrap}>
            {
                list.length ? (

                    list.map(({ id, title, description }) => (

                        <div
                            key={id}
                            className={classes.row}
                        >
                            <h3>{title}{`(${id})`}</h3>
                            <p>{description}</p>
                            <div className={classes.actions}>
                                <button
                                    className="btn-update"
                                    onClick={() => btnUpdate({ id, title, description })}
                                >
                                    編輯
                                </button>
                                <button onClick={() => btnDelete(id)}>刪除</button>
                            </div>
                        </div>

                    ))

                ) : <p>目前沒有資料...</p>
            }
        </div>

    );

};

export default ToDoList;
