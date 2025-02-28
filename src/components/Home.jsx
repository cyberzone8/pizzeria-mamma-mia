import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../data/pizzas';

const Home = () => {
  return (
    <div className="container-fluid px-4 my-4">
      <Header />
      <div className="row mx-0 justify-content-center">
        {pizzas.map((pizza) => (
          <div className="col-12 col-sm-6 col-md-4 mb-4 px-3" key={pizza.id}>
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;