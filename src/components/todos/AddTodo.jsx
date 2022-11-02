import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import {TextField, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';

import {addTodo, updateTodo} from "../../store/actions/todoActions";

const useStyles = makeStyles({
    formStyles: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0px 0px 12px -3px #000000", 
        display: "flex",
        justifyContent: "space-between"
    },
    submitButton: {
        marginLeft: "20px",
    }
})


const AddTodo = ({ todo, setTodo }) => {
    const classes = useStyles();
    const dispatch = useDispatch(); 

    const handleSubmit  = (e) => {
        e.preventDefault();

        if(todo._id){
            const id = todo._id;
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: "Chaoo",
            }
            dispatch(updateTodo(updatedTodo, id));
        } else {
            const newTodo = {
                ...todo,
                date: new Date()
            }
            dispatch(addTodo(newTodo));
        }

        setTodo({
            name: "",
            isComplete: false,
        })
        
    }
    return (
        <>
            <form noValidate autoComplete = "off" className={ classes.formStyles } onSubmit={handleSubmit}>
                <TextField id = "enter-todo" variant='outlined' label="enterTodo" autoFocus fullWidth value = { todo.name } onChange = {(e) => setTodo({...todo, name: e.target.value})}
                /> 
                <Button className = { classes.submitButton } color="primary" variant = "contained" type ="submit">
                    <Send/>
                </Button>
            </form>
        </>
    );
}
 
export default AddTodo;