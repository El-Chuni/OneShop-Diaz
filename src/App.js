import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'material-icons/iconfont/material-icons.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header bg-danger">
          <h1>One Shop!</h1>
          <h3>¡La tienda no oficial de One Piece!</h3>
        </header>


        <main>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
            <Route exact path='/categoria/:categoriaId' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
            <Route exact path='/producto/:productoId' element={<ItemDetailContainer />} />
          </Routes>
        </main>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
