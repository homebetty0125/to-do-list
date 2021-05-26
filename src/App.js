import { createUseStyles } from 'react-jss';
import ToDoListForm from './components/ToDoListForm';

// css
const useStyles = createUseStyles({
    main: {
        padding: '40px',
    },
});

const App = () => {

    const classes = useStyles();

    return (

        <section className={classes.main}>

            <ToDoListForm />

        </section>

    );

};

export default App;
