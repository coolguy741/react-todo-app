import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from "react-router-dom";

import { signIn } from '../../store/actions/authActions'; 

import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    formStyle: {
        margin: "0px auto",
        padding: "30px",
        borderRadius: "9px",
        boxShadow: "0px 0px 12px -3px #000000",
    },
    spacing: {
        marginTop: "20px",
    }
})

const SignIn = () => {
    const classes = useStyles();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [creds, setCreds] = useState({
        email: "",
        password: ""
    });

    if(auth._id) return <Navigate to='/'/>;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn(creds));
        setCreds({
            email: "",
            password: "",
        })
    }

    return (
        <>
            <form className = {classes.formStyle} noValidate autoComplete="off" onSubmit={ handleSubmit }>
                <Typography variant='h5'>
                    SignIn
                </Typography>
                <TextField 
                className = {classes.spacing} 
                id = "enter-email" 
                label = "enterEmail" 
                variant = "outlined" 
                fullWidth
                value = {creds.email}
                onChange = {(e) => setCreds({...creds, email: e.target.value})}
                />
                <TextField 
                className = {classes.spacing} 
                id = "enter-password" 
                label = "enterPassword" 
                variant = "outlined" 
                type = "password" 
                fullWidth
                value = {creds.password}
                onChange = {(e) => setCreds({...creds, password: e.target.value})}
                />
                <Button 
                className = {classes.spacing} 
                variant='contained' 
                type="submit" 
                color = 'primary'
                >SIGNIN</Button>
            </form>
        </>
    );
}
 
export default SignIn;