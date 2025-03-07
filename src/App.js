import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Header
        <Link to="/todos">Todos</Link>
        <Link to="/albums">Albums</Link>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/todos/*" element={<TodoFeature />} />
          <Route path="/albums" element={<AlbumFeature />} />
        </Routes>
        Footer
      </header>
    </div>
  );
}

export default App;
