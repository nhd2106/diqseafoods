import React from "react";

function Welcome(props) {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h2>Welcome to Diem Quynh Seafoods</h2>
        <p>
        Diem Quynh Seafoods is an Vietnamese Seafood company. We provide Fresh,
          Frozen, Live , Dry Fish and other seafood products that service
          Retail, Foodservice distributors and Exports world wide. Our supply
          chain stretches from our own facilities in India to supply chain
          partners worldwide with the goal to provide the best value and service
          for your seafood needs. We are the global source for your Seafood
          products.
        </p>
      </div>
      <div className="welcome__products">
            <div> <h3>Our Products</h3></div>
            <div className='items'>
                <div className="item">
                    <img className="item__image" src="/items"/>
                </div>
            </div>
      </div>
    </div>
  );
}

export default Welcome;
