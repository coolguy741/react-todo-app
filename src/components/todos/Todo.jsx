import React from 'react';
import { useDispatch } from 'react-redux';
import {Typography, Button, ButtonGroup} from '@material-ui/core';
import {Create, Delete, CheckCircle} from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';

import moment from "moment";

import { checkTodo, deleteTodo } from '../../store/actions/todoActions';

const useStyles = makeStyles({
    todoStyle: {
        margin: "20px auto",
        padding: "20px",
        border: "2px solid #bdbdbd",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "space-between"
    },
    grayStyle: {
        color: "#8f8f8f"
    },
    isComplete: {
        color: "green"
    },
    checked: {
        textDecoration: "line-through",
    }
})

const ListTodos = ({ todo, setTodo }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        setTodo(todo);

        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"

        })
    }

    const handleChange = (id) => {
        dispatch(checkTodo(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
    return (
        <> 
            <div className={ classes.todoStyle }>
                {console.log("todo", todo)}
                <div>
                    {todo.isComplete ?
                    (<Typography variant='subtitle1' className={ classes.checked }>
                        {todo.name}
                    </Typography>) : 
                    (<Typography variant='subtitle1'>
                        {todo.name}
                    </Typography>)   
                    }
                    <Typography variant='body2' className={ classes.grayStyle }>
                        Author: {todo.author}
                    </Typography>
                    <Typography variant='body2' className={ classes.grayStyle }>
                        Added: { moment(todo.date).fromNow()}
                    </Typography>
                </div>
                <div>
                    <ButtonGroup size="small" aria-label='outlined primary button group'>
                        <Button >
                        {todo.isComplete ? 
                            <CheckCircle color="action" onClick = { () => handleChange(todo._id) } className={classes.isComplete}/>
                        :
                            <CheckCircle color="action" onClick = { () => handleChange(todo._id) }/>
                        }
                        </Button>
                        <Button>
                            <Create color="primary" onClick = { () => handleUpdateClick() }/>
                        </Button>
                        <Button>
                            <Delete color="secondary" onClick = { () => handleDelete(todo._id)}/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </>
    );
}
 
export default ListTodos;