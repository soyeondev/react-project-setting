import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import styles from "./app.module.css";
import Symptom from "./pages/page1/symptom";

const Routes = (props) => (
  <div className={styles.app__area}>
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path="/">
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
