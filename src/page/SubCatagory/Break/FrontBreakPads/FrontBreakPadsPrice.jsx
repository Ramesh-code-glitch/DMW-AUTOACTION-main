import React from 'react';
import './FrontBreakPadsPrice.css';



const BrakeParts = () => {
  const products = [
    {
      name: 'Front Brake Pad Set',
      price: '₹1,017.00',
      originalPrice: '₹1,287.00',
      discount: '21%',
      imageUrl: 'https://boodmo.com/media/cache/catalog_image/images/categories/2f78507.jpg',
      link: '',
    },
  
  ];

  return (
    
      
      <section className="product-section">
        <h2>Brake Parts</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
            <a href={product.link}>
              <img src={product.imageUrl} alt={product.name} />
              </a>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <p className="original-price">MRP: <s>{product.originalPrice}</s></p>
                <p className="discount">{product.discount} OFF</p>
               
              </div>
            </div>
          ))}
        </div>
      </section>
      
    
  );
};

export default BrakeParts;