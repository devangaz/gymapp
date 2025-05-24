import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import { FaCheck } from 'react-icons/fa'; // ✅ Import a check icon from react-icons

const Pricing = () => {
  const plans = [ // ✅ Renamed from Pricing to plans (to avoid confusion)
    {
      imgUrl: '/pricing.jpg',
      title: 'QUARTERLY',
      price: 18000,
      length: 3
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'HALF_YEARLY',
      price: 34000,
      length: 6
    },
    {
      imgUrl: '/pricing.jpg',
      title: 'YEARLY',
      price: 67000,
      length: 12
    }
  ];

  return (
    <section className='pricing'> 
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          plans.map(element => {
            return (
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} /> {/* ✅ Dynamic image */}
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>Rs {element.price}</h3>
                  <h3>For {element.length} Months</h3>
                </div>
                <div className="description">
                  <p><FaCheck /> Equipment</p> {/* ✅ Using check icon */}
                  <p><FaCheck /> All Day For Training</p>
                  <p><FaCheck /> Free Restrooms</p>
                  <p><FaCheck /> 24/7 Skilled Support</p>
                  <p><FaCheck /> 20 Days Freezing Option</p>
                  <Link to="/">Join Now</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};

export default Pricing;
