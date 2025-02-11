import './assets/styles/App.css'
import Departure from './pages/Departure';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <Router/> {/* Router.js에서 설정한 라우팅 적용 */}
    </div>
  );
}

export default App;
