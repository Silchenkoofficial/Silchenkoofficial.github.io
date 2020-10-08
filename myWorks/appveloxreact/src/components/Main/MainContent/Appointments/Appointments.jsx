import React from 'react';
import { Card } from './Card/Card';
import {Link} from 'react-router-dom';
import './Appointments.css';

export const Appointments = (props) => {
    let appointmentJSON = props.data;
    return (
        <div className="appointments">
            <div className="appointments__title">Записи на прием</div>
            <div className="appointments__cards">
                <Card
                    day={appointmentJSON[0].day}
                    date={appointmentJSON[0].date}
                    time={appointmentJSON[0].time}
                    hospital={appointmentJSON[0].hospital}
                    address={appointmentJSON[0].address}
                    doctorPhoto={appointmentJSON[0].doctorPhoto}
                    doctorFio={appointmentJSON[0].doctorFio}
                    specialty={appointmentJSON[0].specialty}
                />
                <Card
                    day={appointmentJSON[1].day}
                    date={appointmentJSON[1].date}
                    time={appointmentJSON[1].time}
                    hospital={appointmentJSON[1].hospital}
                    address={appointmentJSON[1].address}
                    doctorPhoto={appointmentJSON[1].doctorPhoto}
                    doctorFio={appointmentJSON[1].doctorFio}
                    specialty={appointmentJSON[1].specialty}
                />
                <div className="appointments__more">
                    <p>Еще <span>{appointmentJSON.length - 2}</span> записи</p>
                    {/* <a href="#">Подробнее</a> */}
                    <Link to="/appointments">Подробнее</Link>
                </div>
            </div>
        </div>
    )
}