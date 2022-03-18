import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import MenuBar from './Components/Shared/Menu-bar/MenuBar';


function App() {
  const [count, setCount] = useState([0])
  const setCartCount =()=>{
    const newCount = parseInt(count)
    setCount(newCount + 1)
  }
  return (
    <div className="App">
      <MenuBar count={count}></MenuBar>
      <Products setCartCount={setCartCount}></Products>

    </div>
  );
}

export default App;
