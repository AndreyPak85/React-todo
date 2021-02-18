import React from 'react';
import './app-header';

const AppHeader = ({toDo, done}) => {
    return (
    <div className="app-header d-flex">
        <h1>Day Schedule</h1>
        <h3>{toDo} : {done}</h3>
    </div>
    );        
};

export default AppHeader;