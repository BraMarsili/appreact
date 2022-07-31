import './App.css';
import NavBar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter'

function App() {

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es ${quantity}`)
  }

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='Bienvenidos!' />
      <Counter stock={10} onAdd={handleOnAdd}/>
    </div>
  );
}

export default App;
