import React from 'react';
import './MainContent.css';
import { Appointments } from './Appointments/Appointments';
import { ElectronicCard } from './ElectronicCard/ElectronicCard';

export const MainContent = (props) => {
    return (
        <div className="main__content content">
            <Appointments data={props.data} />
            <ElectronicCard />
        </div>
    );
}