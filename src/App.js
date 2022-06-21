import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'material-icons/iconfont/material-icons.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-danger">
        <h1>One Shop!</h1>
      </header>

      <NavBar />

      <main>
        <ItemListContainer frase="Kaizoku ou ni ore wa naru!" />
      </main>
      
    </div>
  );
}

export default App;
