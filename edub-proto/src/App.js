
import './style/App.css';
import './style/Header.css';
import './style/Menubar.css';
import './style/Component.css';
import Header from './components/header/Header';
import Container from './components/body/Container';

function App() {
  return (
    <div className="App">	
      <Header/>
      <Container/>
    </div>
  );
}

export default App;
