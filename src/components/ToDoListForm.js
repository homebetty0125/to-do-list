import React, { Fragment } from 'react';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';
import Service from '../lib/service';

// css
const useStyles = createUseStyles({
    toDoListWrap: {
        maxWidth: '20%',
        margin: '0 auto',
        '& h2': {
            textAlign: 'center',
        },
    },
    form: {
        '& > *': {
            marginBottom: '20px',
        },
        '& input': {
            width: '100%',
            fontSize: '16px',
            border: '1px solid #b8b8b8',
            display: 'block',
            padding: '6px 10px',
            boxSizing: 'border-box',
        },
    },
    formActions: {
        '& button': {
            width: '100%',
            fontSize: '18px',
            border: '1px solid #b8b8b8',
            marginBottom: '20px',
            padding: '6px 40px',
            cursor: 'pointer',
        },
        '& [type="submit"]': {
            backgroundColor: 'pink',
            border: 0,
        },
    },
});

const ToDoListForm = () => {

    const classes = useStyles();

    //
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    // 送資料
    const handleReqData = (reqData) => {

        // console.log('reqData:', reqData);

        Service.createToDoList(reqData)
            .then((res) => {

                console.log('res:', res);

            });

    };

    return (

        <div className={classes.toDoListWrap}>
            <h2>Please enter the name.</h2>

            <form
                className={classes.form}
                onSubmit={handleSubmit(handleReqData)}
            >
                <div className="row">
                    Title:
                    <input
                        type="text"
                        { ...register('title') }
                    />
                </div>

                <div className="row">
                    Descriiption:
                    <input
                        type="text"
                        { ...register('description') }
                    />
                </div>

                <div className={classes.formActions}>
                    <button type="submit">確定</button>
                    <button type="reset">取消</button>
                </div>
            </form>
        </div>

    );

};

export default ToDoListForm;
