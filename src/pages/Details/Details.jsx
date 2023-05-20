// import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const Details = () => {
    const detail = useLoaderData();
  useTitle('Details')
    const {picture,name, seller, email, price, rating, quantity, details} = detail;
    console.log(detail)
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">Toy Name: {name}</h1>
      <p className="p-1 font-bold">Seller Name: {seller}</p>
      <p className="p-1">Seller Email: {email}</p>
      <p className="p-1">Price: ${price}</p>
      <div className="text-yellow-500 flex justify-start p-1">
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStarHalfAlt} /> 
    <span className="text-black font-bold ms-2"> { rating}</span>
    </div>
    <p className="p-1">Abailable Quantity: {quantity}</p>
    <p className="p-1"><span className="font-bold">Detail Description:</span><br /> {details}</p>
      
    </div>
  </div>
</div>
    );
};

export default Details;