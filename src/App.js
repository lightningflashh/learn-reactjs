import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import Album from './features/Album/components/Album';
import AlbumFeature from './features/Album';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoFeature />
        {/* <AlbumFeature /> */}
      </header>
    </div>
  );
}

export default App;
