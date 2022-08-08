import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'material-icons/iconfont/material-icons.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ContextoCompras from './context/cartContext';
import { Cart } from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import SearchItemList from './components/SearchItemList/searchItemList';



function App() {
  return (
    
    //BrowserRouter permite que Routes y los route(s) cambien de producto o categoría de productos para ver en pantalla
    //ContextoCompras comparte la informacion con todos los hijos del main para que interactuen entre sí
    <>
    
    
    
      
      <div className="App">
        <Header />

        <main>
          <BrowserRouter>
            <ContextoCompras>
              <NavBar />
              <Routes>
                <Route path='/' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
                <Route path='/categoria/:categoriaId' element={<ItemListContainer frase='Kaizoku ou ni ore wa naru!' />} />
                <Route path='/producto/:productoId' element={<ItemDetailContainer />} />
                <Route path='/busqueda/:searchId' element={<SearchItemList />} />
                <Route path='/carrito' element={<Cart />} />
                <Route path='/checkout' element={<Checkout />} />
              </Routes>
            </ContextoCompras>
          </BrowserRouter>
        </main>
      
      </div>
    

    </>
  );
}

export default App;
