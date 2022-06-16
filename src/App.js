import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-danger">
        <h1>One Shop!</h1>
      </header>

      <NavBar />
    </div>
  );
}

export default App;
