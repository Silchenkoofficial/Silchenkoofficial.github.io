import React from 'react';
import './MainContent.css';
import { Appointments } from './Appointments/Appointments';
import { ElectronicCard } from './ElectronicCard/ElectronicCard';

export const MainContent = () => {
    return (
        <div className="main__content content">
            <Appointments />
            <ElectronicCard />
        </div>
    );
}