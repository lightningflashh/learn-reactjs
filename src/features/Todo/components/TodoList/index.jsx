import React from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todoList }) => {
    return (
        <div>
            <ul>
                {todoList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
};


TodoList.propTypes = {
    todoList: PropTypes.array
};

TodoList.defaultProps = {
    todoList: [],
};

export default TodoList;
