import React from 'react';
import "../Break/break.css"
import Navbar from '../../../component/Navbar/Navbar'
import Footer from '../../../component/Footer/Footer';

const PartsBrake = () => {
  const subcategories = [
    {
      name: 'Fan & Parts',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651556414-Fan-and-Parts.png',
      link: 'http://localhost:5173/#/CandH_FanAndParts',
    },
    {
      name: 'Intercoolers',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651476866-Intercoolers.png',
      link: '',
    },
    {
      name: 'Heater Motors',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477163-Heater-Motors.png',
      link: '',
    },
    {
      name: 'Compressors',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477212-Compressors.png',
      link: ' ',
    },
    {
      name: 'Condensors',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477198-Condensors.png',
      link: '  ',
    },
    {
      name: 'Actuaters',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477228-Actuaters.png',
      link: ' ',
    },
    {
      name: 'Air Conditioning Controls',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477276-Air-Conditioning-Controls.png',
      link: ' ',
    },
    {
      name: 'Heater Motors',
      imageUrl: 'https://www.selectusedparts.com/assets/images/sub-category-image/1651477163-Heater-Motors.png',
      link: ' ',
    },
  ];


  return (
    <div>
    < Navbar/>
    <section className="feature-categories">
      <h2>Cooling & Heating</h2>
      <div className="categories-grid">
        {subcategories.map((category, index) => (
          <div key={index} className="category-card">
            <a href={category.link}>
              <img src={category.imageUrl} alt={category.name} />
              </a>
              <p>{category.name}</p>
          </div>
        ))}
      </div>
    </section>
    < Footer/>
    </div>
   
  );
};

export default PartsBrake;
