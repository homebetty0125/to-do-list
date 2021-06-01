import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToDoListContext } from '../context/toDoList.state';

// css
const useStyles = createUseStyles({
    toDoListWrap: {
        maxWidth: '80%',
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

    // Context
    const {
        createToDoList,
        updateToDoList,
        dispatch,
        formStorage,
    } = useContext(ToDoListContext);

    const classes = useStyles();

    //
    const {
        handleSubmit,
        register,
        formState: { errors },
        reset,
    } = useForm();

    // 送資料
    const handleReqData = (reqData) => {

        reqData = {
            ...formStorage,
            ...reqData,
        };

        if (reqData.id) updateToDoList(reqData).then(handleCancel);
        else createToDoList(reqData).then(handleReset);

    };

    // 清除
    const handleReset = () => reset();

    // 取消
    const handleCancel = () => {

        handleReset();
        dispatch({ type: 'FORM', payload: {} });

    };

    return (

        <div className={classes.toDoListWrap}>
            <h2>Please enter the name.</h2>

            <p>{formStorage.id && `ID: ${formStorage.id}`}</p>

            <form
                className={classes.form}
                onSubmit={handleSubmit(handleReqData)}
            >
                <div className="row">
                    Title:
                    <input
                        type="text"
                        defaultValue={formStorage.title}
                        { ...register('title', { required: 'This is required.' }) }
                    />
                    <ErrorMessage errors={errors} name="title" />
                </div>

                <div className="row">
                    Descriiption:
                    <input
                        type="text"
                        defaultValue={formStorage.description}
                        { ...register('description') }
                    />
                </div>

                <div className={classes.formActions}>
                    <button type="submit">確定</button>
                    <button type="reset" onClick={handleCancel}>取消</button>
                </div>
            </form>
        </div>

    );

};

export default ToDoListForm;
