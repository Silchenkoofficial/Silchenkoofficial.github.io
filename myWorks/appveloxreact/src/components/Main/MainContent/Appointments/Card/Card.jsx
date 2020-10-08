import React from 'react';
import './Card.css';

export const Card = (props) => {
    return (
        <div className="card">
            <div className="card__day">
                {props.day} {props.date} | {props.time} 
            </div>
            <div className="card__hospital">
                {props.hospital}
            </div>
            <div className="card__address">
                {props.address}
            </div>
            <div className="card__doctor">
                <div className="card__doctor--photo">
                    <img src={props.doctorPhoto} alt=""/>
                </div>
                <div className="card__doctor--info doctor">
                    <div className="doctor__fio">
                        {props.doctorFio}
                    </div>
                    <div className="doctor__specialty">
                        {props.specialty}
                    </div>
                </div>
            </div>
            <div className="card__undoBtn">Отменить</div>
        </div>
    )
}
