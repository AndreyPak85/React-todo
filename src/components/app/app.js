import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {

    state = {
        todoData: [
            { label: "Wakeup", important: false, id: 1 },
            { label: "Have a breakfast", important: true, id: 2 },
            { label: "Go to work", important: true, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id === id)
            const newArr = [...todoData.slice(0, indx), ...todoData.slice(indx+1)]
            return {
                todoData: newArr
            }
        })
    }

    maxId = 100;

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }
    
    render () {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={2} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <TodoList todos={ this.state.todoData } 
                onDeleted={ this.deleteItem }/>
                <ItemAddForm 
                onItemAdded={ this.addItem }/>
            </div>
        );
    }
}

