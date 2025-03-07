import { React, useState } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

const TodoFeature = () => {
    return (
        <div>
            <Routes>
                <Route path="" element={<ListPage />} exact />
                <Route path=":todoId" element={<DetailPage />} />
            </Routes>
        </div>
    );
};

export default TodoFeature;
