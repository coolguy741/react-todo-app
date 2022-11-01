import React from 'react';
import {AppBar, Typography, Toolbar, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

import {Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    linkStyle: {
        color: "#fafafa",
        textDecoration: "none"
    }
})

const NavBar = () => {
    const classes = useStyles();
    const   navigate = useNavigate ();

    const handleSignOut = () => {
        //SignOut the User
        navigate('/signin');
    }
    return (
        <>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant = "h4">
                        <Link className = { classes.linkStyle } to="/">
                            todoApp
                        </Link> 
                    </Typography>
                    <Typography variant = "subtitle2" className={ classes.root}>
                        Logged in as Chacoo
                    </Typography>
                    <Button color="inherit" onClick={() => handleSignOut()}>
                        SignOut
                    </Button>
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
                </Toolbar>
            </AppBar>
        </> 
    );
}
 
export default NavBar;