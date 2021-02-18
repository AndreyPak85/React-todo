import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Wakeup'),
            this.createTodoItem('Have a breakfast'),
            this.createTodoItem('Go to Work'),
        ]
    }

    createTodoItem (label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }
    
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const indx = this.indFind(todoData, id)
            const newArray = [
                ...todoData.slice(0, indx), ...todoData.slice(indx+1)
            ]
            return {
                todoData: newArray
            }
            
        })
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [...todoData, newItem];
            return {
                todoData: newArr
            }
        })
    }

    indFind(arr, id) {
        const indx = arr.findIndex((el) => el.id === id);
        return indx;
    }

    toggleProperty(arr, id, propName) {
            const idx = this.indFind(arr, id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [propName]: !oldItem[propName]}
            const newArray = [...arr.slice(0, idx), 
                newItem, 
                ...arr.slice(idx+1)]
            return newArray;  
    }

    onToggleImportant = (id) => {
        
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
            // const idx = todoData.findIndex((el) => el.id === id);
            // const oldItem = todoData[idx];
            // const newItem = {...oldItem, important: !oldItem.important}
            // const newArray = [...todoData.slice(0, idx), 
            //     newItem, 
            //     ...todoData.slice(idx+1)]
            // return {
            //     todoData: newArray
            // }
        })
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
            // const idx = todoData.findIndex((el) => el.id === id);
            // const oldItem = todoData[idx];
            // const newItem = {...oldItem, done: !oldItem.done}
            // const newArray = [...todoData.slice(0, idx),
            //     newItem,
            //     ...todoData.slice(idx+1)]
            // return {
            //     todoData: newArray
            // }
            }
        );
     } ;
    
    render () {

        const doneCount = this.state.todoData.filter((el) => el.done).length;
        const todoCount = this.state.todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                
                <TodoList todos={ this.state.todoData } 
                onDeleted={ this.deleteItem }
                onToggleImportant={ this.onToggleImportant }
                onToggleDone={ this.onToggleDone }/>
                <ItemAddForm 
                onItemAdded={ this.addItem }/>
            </div>
        );
    }
}

