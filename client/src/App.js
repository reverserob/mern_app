import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Landing";
import Landing from "./components/layout/Navbar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import './App.css';

const App = () => (
    <Router>
        <Fragment>
            <Navbar/>
            <Route exact path='/' component={Landing} />
            <section  className='container'>
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
            </section>
            {/*<Landing/>*/}
        </Fragment>
    </Router>


  )

export default App;
