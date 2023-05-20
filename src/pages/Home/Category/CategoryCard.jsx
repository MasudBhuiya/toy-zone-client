// import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const CategoryCard = ({toy}) => {
  const {user} = useContext(AuthContext)
    const {name, picture, price, rating, _id} = toy;
    
    const detail = () =>{
      if(!user){
        Swal.fire(
          {
            icon: 'warning',
            title: 'Oops...',
          text:'You have to log in first to view details.'
          }
        )
      }
    }
    return (
        <div className="card w-80 bg-base-100 mb-7 shadow-xl">
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
      <Link to={`/details/${_id}`}><button onClick={detail} className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default CategoryCard;