import React from "react";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import NavBar from "./components/navBar/NavBar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Todos from "./components/todos/Todos";

const useStyles = makeStyles({
  contentStyle: {
    margin: "30px auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>
        <Container maxWidth="md">
          <NavBar />
          <Container className={classes.contentStyle} maxWidth="sm">
            <Routes>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/" element={<Todos />} />
            </Routes>
          </Container>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
