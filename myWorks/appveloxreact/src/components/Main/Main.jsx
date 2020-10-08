import React from 'react';
import './Main.css';
import { MainHeader } from './MainHeader/MainHeader';
import { MainContent } from './MainContent/MainContent';
import { MyAppointments } from './MyAppointments/MyAppointments';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const Main = () => {
    let appointmentJSON = getAppointments("https://api.jsonbin.io/b/5f7cc3f57243cd7e824bb9bc/7");
    return (
        <div className="main">
            <MainHeader />
            <Router>
                <Route exact path="/" component={() => <MainContent data={appointmentJSON}/>}/>
                <Route exact path="/appointments" component={() => <MyAppointments data={appointmentJSON}/>}/>
            </Router>
        </div>
    )
}

function getAppointments(fileName) {
    let request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send(null);
    return JSON.parse(request.responseText);
}