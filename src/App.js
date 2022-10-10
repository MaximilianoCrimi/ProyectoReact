import './App.css';
import Navegacion from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div>
      <Navegacion/>
      <ItemListContainer msg="Bienvenido a mi Page"/>
    </div>
  );
}

export default App;
