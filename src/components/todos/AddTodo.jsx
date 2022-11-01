import React from 'react';
import {TextField, Button} from '@material-ui/core';
import {Send} from '@material-ui/icons';
import {makeStyles} from '@material-ui/styles';

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


const AddTodo = () => {
    const classes = useStyles();
    return (
        <>
            <form noValidate autoComplete = "off" className={ classes.formStyles }>
                <TextField id = "enter-todo" variant='outlined' label="enterTodo" autoFocus fullWidth
                />
                <Button className = { classes.submitButton } color="primary" variant = "contained" type ="submit">
                    <Send/>
                </Button>
            </form>
        </>
    );
}
 
export default AddTodo;