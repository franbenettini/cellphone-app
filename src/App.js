import './App.css';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {


  return (

    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting = {'Productos !!'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer/>} />
          <Route path='/*' element={<h1>NOT FOUND 404</h1>} />
          <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;


