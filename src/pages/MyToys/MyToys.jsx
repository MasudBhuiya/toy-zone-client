// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysCard from "./MyToysCard";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);

    const {user} = useContext(AuthContext)

    const url = (`http://localhost:5000/mytoys?email=${user?.email}`);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
            console.log(data)
        })
    },[url])
    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {
                myToys.map(toys => <MyToysCard key={toys._id} toys={toys}></MyToysCard>)
            }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;