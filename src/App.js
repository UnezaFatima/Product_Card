import React from 'react';
import { products } from './dummyProd.jsx';
import ProductCard from './productCard.jsx';
import './style.css';

const App = () => {
  return (
  <>
    <div className="product-list">
      {products.map(product => (
       
        <ProductCard 
          key={product.id} 
          name={product.name} 
          price={product.price} 
          image={product.image} 
          rating={product.rating}
        />
          
      ))}
    </div>

    </>
  );
};

export default App;

