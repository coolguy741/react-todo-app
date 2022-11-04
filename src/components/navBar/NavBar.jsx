import React from 'react';
import { useDispatch } from 'react-redux';

import {AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import {Link, useNavigate } from "react-router-dom";
import { signOut } from '../../store/actions/authActions';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    linkStyle: {
        color: "#fafafa",
        textDecoration: "none"
    }
})

const NavBar = () => {
    const classes = useStyles();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate ();

    const handleSignOut = () => {
        dispatch(signOut());
        //SignOut the User
        navigate('/signin');
    }
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant = "h4" className={ classes.root}>
                        <Link className = { classes.linkStyle } to="/">
                            todoApp
                        </Link> 
                    </Typography>
                    {auth._id ? (
                    <>
                        <Typography variant = "subtitle2" className={ classes.root}>
                            Logged in as {auth.name}
                        </Typography>
                        <Button color="inherit" onClick={() => handleSignOut()}>
                            SignOut
                        </Button>
                    </>)
                    :(
                    <>
                        <Button color="inherit">
                            <Link className={classes.linkStyle} to = "/signin">
                                SignIn
                            </Link>
                        </Button>
                        <Button color="inherit">
                            <Link className={classes.linkStyle} to = "/signup">
                                SignUp
                            </Link>
                        </Button>
                    </>)
                    }
                </Toolbar>
            </AppBar>
        </> 
    );
}
 
export default NavBar;