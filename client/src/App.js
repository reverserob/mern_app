import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Landing";
import Landing from "./components/layout/Navbar";
import './App.css';

const App = () => (
    <Router>
        <Fragment>
            <Navbar/>
            <Route exact path='/' component={Landing} />
            {/*<Landing/>*/}
        </Fragment>
    </Router>


  )

export default App;
