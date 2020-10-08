import React from 'react'
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

export const App = () => {
    return (
        <div className="wrapper">
            <Sidebar />
            <Main />
        </div>
    )
}
