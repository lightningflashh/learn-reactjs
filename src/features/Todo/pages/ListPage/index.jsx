import queryString from 'query-string';
import TodoList from '../../components/TodoList';
import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ListPage = () => {
    const initTodoList = [
        { id: 1, title: 'Eat', status: 'completed' },
        { id: 2, title: 'Sleep', status: 'new' },
        { id: 3, title: 'Code', status: 'new' },
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    // Cập nhật `filteredStatus` khi URL thay đổi
    useEffect(() => {
        const params = queryString.parse(location.search);
        setFilteredStatus(params.status || 'all');
    }, [location.search]);

    const handleFilterChange = (status) => {
        navigate({
            pathname: location.pathname,
            search: queryString.stringify({ status }),
        });
    };

    const handleTodoClick = (todo, idx) => {
        const updatedTodos = [...todoList];
        updatedTodos[idx] = {
            ...updatedTodos[idx],
            status: updatedTodos[idx].status === 'new' ? 'completed' : 'new',
        };
        setTodoList(updatedTodos);
    };

    // Dùng `useMemo()` để chỉ lọc lại danh sách khi `todoList` hoặc `filteredStatus` thay đổi
    const renderTodoList = useMemo(() => {
        return todoList.filter(
            (todo) => filteredStatus === 'all' || filteredStatus === todo.status
        );
    }, [todoList, filteredStatus]);

    return (
        <div>
            <h3>To do List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoClick} />
            <div>
                <button onClick={() => handleFilterChange('all')}>Show All</button>
                <button onClick={() => handleFilterChange('completed')}>Show Completed</button>
                <button onClick={() => handleFilterChange('new')}>Show New</button>
            </div>
        </div>
    );
};

export default ListPage;
