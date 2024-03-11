
import './App.css';
import Avatar from './components/Avertar';
import Gallery from './components/Gallery';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Gallery/>
      <TodoList/>
      <Avatar/>
    </div>
  );
}

export default App;
