// import React from 'react';

import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('')
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            // console.log(data)
        })
    },[])

    // useEffect(()=>{
    // },[])


    const handleSearch = () =>{
      fetch(`http://localhost:5000/toySearch/${search}`)
      .then(res => res.json())
        .then(data => {
          setItems(data)
            // console.log(data)
        })
    }



    return (
        <div>
            <h1 className="text-5xl mb-5">All Toys: {items.length}</h1>
            <div className=" flex justify-center mb-7">
            <div className="form-control">
  <div className="input-group">
    <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Search…" className="input input-bordered" />
    <button onClick={handleSearch} className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
            </div>

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
                items.slice(0, 20).map(item => <ToysCard key={item._id} item={item}></ToysCard>)
            }
      
    </tbody>
    
  </table>
</div>



        </div>
        // <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-6 mt-20 mb-20">
        //     
        // </div>
    );
};

export default AllToys;