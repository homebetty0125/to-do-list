import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Service from '../lib/service';

// css
const useStyles = createUseStyles({
    toDoListWrap: {
        // padding: '40px',
    },
    row: {
        border: '1px solid gray',
        marginBottom: '20px',
        padding: '16px',
        '& h3': {
            margin: '0 0 8px 0',
        }
    },
});

const ToDoList = () => {

    const classes = useStyles();

    // State
    const [list, setList] = useState([]);

    useEffect(() => {

        Service.getToDoList()
            .then(({ list }) => setList(list));

    }, []);

    return (

        <div className={classes.toDoListWrap}>
            {
                list.map(({ id, title, description }) => (

                    <div
                        key={id}
                        className={classes.row}
                    >
                        <h3>{title}</h3>
                        <div>{description}</div>
                    </div>

                ))
            }
        </div>

    );

};

export default ToDoList;
