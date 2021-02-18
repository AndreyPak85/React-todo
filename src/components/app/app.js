import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        { label: "Wakeup", important: false, id: 1 },
        { label: "Have a breakfast", important: true, id: 2 },
        { label: "Go to work", important: true, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={2} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>
            
            <TodoList todos={todoData} />
         </div>
    );
};

export default App;