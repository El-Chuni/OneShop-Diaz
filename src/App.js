import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'material-icons/iconfont/material-icons.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContextoCompras from './context/cartContext';
import { Cart } from './components/Cart/Cart';



function App() {
  return (
    
    //BrowserRouter permite que Routes y los route(s) cambien de producto o categoría de productos para ver en pantalla
    <>
    
    
    <BrowserRouter>
      
      <div className="App">
        <header className="App-header bg-danger">
          <h1>One Shop!</h1>
          <h3>¡La tienda no oficial de One Piece!</h3>
        </header>


        <main>
          <ContextoCompras>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
              <Route exact path='/producto/:productoId' element={<ItemDetailContainer />} />
              <Route exact path='/carrito' element={<Cart />} />
            </Routes>
          </ContextoCompras>
        </main>
      
      </div>
    </BrowserRouter>

    </>
  );
}

export default App;
