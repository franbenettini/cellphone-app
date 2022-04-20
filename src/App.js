import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import { useState, createContext } from 'react';

const App = () => {


  return (

    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = {'Nuestros ultimos Productos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/*' element={<h1>NOT FOUND 404</h1>} />
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      
    </div>
  )
}

export default App;


