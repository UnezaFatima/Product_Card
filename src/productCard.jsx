import React from 'react';

const ProductCard = ({ name, price, image, rating }) => {
  return (
    
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      <h3>Rating: {rating } </h3>
    
        <button className='button'>Buy Now</button>
      </div>
   
  
  );
};

export default ProductCard;
