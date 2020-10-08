import React from 'react';
import {Link} from 'react-router-dom';
import './MyAppointments.css';
import { Card } from '../MainContent/Appointments/Card/Card';
import Calendar from './Calendar/Calendar';

export const MyAppointments = () => {
    let appointmentJSON = getAppointments("https://api.jsonbin.io/b/5f7cc3f57243cd7e824bb9bc/5");
    return (
        <div className="appointments">
            <div className="appointments__title">
                <Link to="/"><i className="fas fa-arrow-left"></i>Мои записи</Link>
            </div>
            <div className="appointments__wrapper">
                <div className="appointments__card">
                    {
                        appointmentJSON.map((item) => (
                            <Card
                                day={item.day}
                                date={item.date}
                                time={item.time}
                                hospital={item.hospital}
                                address={item.address}
                                doctorPhoto={item.doctorPhoto}
                                doctorFio={item.doctorFio}
                                specialty={item.specialty}
                            />
                        ))
                    }
                </div>
                <Calendar data={appointmentJSON} />
            </div>
        </div>
    )
}

function getAppointments(fileName) {
    let request = new XMLHttpRequest();
    request.open('GET', fileName, false);
    request.send(null);
    return JSON.parse(request.responseText);
}