import React from 'react';

import {Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import Todo from './Todo';

const useStyles = makeStyles({
    todosStyles: {
        margin: "20px auto",
        padding: "20px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000"
    }
})


const ListTodos = () => {
    const classes = useStyles();
    return (
        <>
            <div className={ classes.todosStyles }>
                <Typography variant = "h5">
                    theTodos
                </Typography>
                <Todo/>
                <Todo/>
            </div>
        </>
    );
}
 
export default ListTodos;