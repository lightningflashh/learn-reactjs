import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';


const TodoFeature = () => {

    const initTodoList = [
        { id: 1, title: 'Eat', status: 'completed' },
        { id: 2, title: 'Sleep', status: 'new' },
        { id: 3, title: 'Code', status: 'new' },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleShowAllClick = () => {
        setFilteredStatus('all');
    };
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    };
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    };

    const handleTodoClick = (todo, idx) => {
        const cloneTodoList = [...todoList]; // DO NOT MUTATE STATE
        cloneTodoList[idx] = {
            ...cloneTodoList[idx],
            status: cloneTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(cloneTodoList);
    };

    const renderTodoList = todoList.filter(
        (todo) => filteredStatus === 'all' || filteredStatus === todo.status
    );

    return (
        <div>
            <h3>To do List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
};

export default TodoFeature;
