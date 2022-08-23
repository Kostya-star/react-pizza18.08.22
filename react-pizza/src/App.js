import {Header} from './components'
import {Home, Cart} from './pages';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/db.json').then((response) => response.json()).then((json) => {
      setPizzas(json.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home items={pizzas}/>} />
          <Route exact path='/cart' element={<Cart/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

