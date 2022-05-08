import './App.css';
import NavBar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Footer from "./components/Footer/Footer"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Form from './components/Form/Form'


const App = () => {
  return (

  
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = {'Nuestros ultimos Productos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/*' element={<h1>NOT FOUND 404</h1>} />
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/form' element={<Form />}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
          <ToastContainer/>
          <Footer/>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;


