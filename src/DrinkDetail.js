import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDrinkById } from './service/httpRequest'; 
import './DrinkDetail.css'; 

function DrinkDetail() {
  const { id } = useParams();
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    const fetchDrink = async () => {
      const data = await getDrinkById(id);
      setDrink(data);
    };
    fetchDrink();
  }, [id]);

  if (!drink) return <p className="text-center my-5">Cargando...</p>;
  console.log(`la bebida es`,drink)
  return (
    <div className="container my-5">
      <div className="card mx-auto" style={{ maxWidth: '500px' }}>
        <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink} />
        <div className="card-body text-center">
          <h2 className="card-title">{drink.strDrink}</h2>
          <p className="card-text"><strong>Categoria:</strong> {drink.strDrink}</p>
          <p className="card-text"><strong>Cristal :</strong> {drink.strGlass}</p>
          <p className="card-text"><strong>Instrucciones:</strong> {drink.strInstructions}</p>
          <a href="/" className="btn btn-primary mt-3">Volver</a>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetail;
