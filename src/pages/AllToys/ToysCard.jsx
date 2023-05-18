// import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const ToysCard = ({item}) => {
    const {name, picture, price, rating} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div className="card-body justify-start">
    <h2 className="card-title">{name}</h2>
    <p className="flex justify-start">Price: {price}</p>
    <div className="text-yellow-500 flex justify-start">
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStarHalfAlt} /> 
    <span className="text-black font-bold ms-2"> { rating}</span>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ToysCard;