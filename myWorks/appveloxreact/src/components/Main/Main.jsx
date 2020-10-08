import React from 'react';
import './Main.css';
import { MainHeader } from './MainHeader/MainHeader';
import { MainContent } from './MainContent/MainContent';
import { MyAppointments } from './MyAppointments/MyAppointments';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const Main = () => {
    return (
        <div className="main">
            <MainHeader />
            <Router>
                <Route exact path="/" component={MainContent} />
                <Route exact path="/appointments" component={MyAppointments} />
            </Router>
        </div>
    )
}
