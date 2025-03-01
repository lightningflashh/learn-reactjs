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

    const handleTodoClick = (todo, idx) => {
        const cloneTodoList = [...todoList]; // DO NOT MUTATE STATE
        cloneTodoList[idx] = {
            ...cloneTodoList[idx],
            status: cloneTodoList[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(cloneTodoList);
    };

    return (
        <div>
            <h3>To do List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
};

export default TodoFeature;
