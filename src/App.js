import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllDrinks } from './service/httpRequest';
import DrinkDetail from './DrinkDetail'; // Importa el componente de detalles

function App() {
  const [drinks, setDrinks] = useState([]); 

  useEffect(() => {
    const getDrinksDataRequest = async () => {
      const drinksData = await getAllDrinks();
      setDrinks(drinksData);
    };
    getDrinksDataRequest();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 className='text-center my-3'>Examen Final</h1>
              <h3>Desarrollo Web 2024 - Chiquimulilla, Santa Rosa</h3>
              <h3>UMG</h3>

            
              <div className='cardContainer'>
                {drinks.map((item) => (
                  <div className="card" key={item.idDrink}>
                    <img src={item.strDrinkThumb} className="card-img-top" alt={item.strDrink} />
                    <div className="card-body">
                      <h5 className="card-title">{item.strDrink}</h5>
                      {/* Botón para navegar a otro componente */}
                      <Link to={`${item.idDrink}`} className="btn btn-primary">
                        Ver detalles
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          }
        />
        <Route path="/:id" element={<DrinkDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
