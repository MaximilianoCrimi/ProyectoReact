import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Home from './components/Home';


function App() {
  return (
    <div>
      <Navegacion/>
      <ItemListContainer msg="Bienvenido a mi Page"/>
      <Home/>
    </div>
  );
}

export default App;




