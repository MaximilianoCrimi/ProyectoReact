import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';


function App() {
  return (
    <div>
      <Navegacion/>
      <ItemListContainer msg="Bienvenido a mi Page"/>
      <Card/>
    </div>
  );
}

export default App;




