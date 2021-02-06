import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { Navbar } from '../componentes/ui/navBar.js';
import { loginScreen } from '../componentes/login/loginScreen';
import { particularesScreen } from '../componentes/particulares/particularesScreen';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={loginScreen}/>
                    <Route path="/" component={ DashboardRouter }/>
                </ Switch>
            </ div>
        </ Router>
    )
}
