import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from'./pages';
import Contact from'./pages/contact.us';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <ItemListContainer greeting = {'Hola !!'}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contact.us" component={Contact}/>
      </Switch>
    </Router>
  )
}

export default App;


