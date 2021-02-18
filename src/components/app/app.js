import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';

const App = () => {

    const todoData = [
        { label: "Wakeup", important: false, id: 1 },
        { label: "Have a breakfast", important: true, id: 2 },
        { label: "Go to work", important: true, id: 3 }
    ];

    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
         </div>
    );
};

export default App;