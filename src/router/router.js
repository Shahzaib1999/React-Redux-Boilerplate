import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import SignUp from '../screen/signUp/SignUp'
import LogIn from '../screen/logIn/LogIn'
import Home from '../screen/home/Home'
import Dashboard from '../screen/dashboard/Dashboard'
import Navbar from "../screen/navbar/navbar";
import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

class Routers extends Component {

    render() {
        return (
                <Router history={customHistory}>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/SignUp" component={SignUp} />
                        <Route exact path="/LogIn" component={LogIn} />
                        <Route path='/Dashboard' component={Dashboard} />
                    </div>
                </Router>
        )
    }

}
export default Routers;