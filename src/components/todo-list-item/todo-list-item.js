import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component { 

    
    // constructor () {
    //     super();
    //     this.state = {
    //         done: false,
    //         important: false
    //     }

    //     this.onLabelClick = () => {
    //         this.setState(({done}) => {
    //             return {
    //                 done: !done
    //             }
    //         })
    //     }

    //     this.onMarkImportant = () => {
    //         this.setState(({important}) => {
    //             return {
    //                 important: !important
    //             }
    //         })
    //     }
    // }

    // state = {
    //     done: false,
    //     important: false
    // }

    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         }
    //     })
    // }

    // onLabelClick = () => {
    //     this.setState(({done}) => {
    //         return {
    //         done: !done
    //         }
    //     })
    // }

    render() {
            const {important, done, label, onDeleted, onToggleDone, onToggleImportant} = this.props;
            // const {done, important} = this.state;
            let classNames = 'todo-list-item'
            if (done) {
                classNames += ' done';
            }

            if (important) {
                classNames += ' important';
            }

        return (
            <span className={classNames}>
                <span className="todo-list-item-label"
                    onClick={ onToggleDone }>
                         {label}
                </span>
                <button className="btn btn-outline-success btn-sm float-right"
                        onClick={ onToggleImportant }>
                    <i className="fa fa-exclamation" />
                </button>
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right"
                    onClick={onDeleted}>
                <i className="fa fa-trash-o" />
                </button>
            </span>
        );
    }
}