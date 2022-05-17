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
import NotFound from './components/NotFound/NotFound'
import { Helmet } from "react-helmet"


const App = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Shop</title>
        <link rel="icon" href="./images/favicon.png" />
      </Helmet>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting = {'Nuestros Productos'}/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} />
            <Route path='/*' element={<NotFound/>} />
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


