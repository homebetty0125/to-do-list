import { createUseStyles } from 'react-jss';
import { ToDoListProvider } from './context/toDoList.state';
import ToDoList from './components/ToDoList';
import ToDoListForm from './components/ToDoListForm';

// css
const useStyles = createUseStyles({
    main: {
        maxWidth: '500px',
        margin: '0 auto',
        padding: '40px',
    },
});

//
const App = () => {

    const classes = useStyles();

    return (

        <ToDoListProvider>
            <section className={classes.main}>
                <ToDoListForm />
                <ToDoList />
            </section>
        </ToDoListProvider>

    );

};

export default App;
