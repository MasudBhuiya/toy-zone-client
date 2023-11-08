// import React from 'react';

import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";
import useTitle from "../../Hooks/useTitle";

const AllToys = () => {
    const [items, setItems] = useState([]);
    const [search, setSearch] = useState('');
    const [asc, setAsc] = useState(true);
    useTitle('All Toys')
    useEffect(()=>{
        fetch(`https://assignment-eleven-server-three.vercel.app/toys?sort=${asc ? 'asc': 'desc'}&limit=${20}`)
        // fetch(`http://localhost:5000/toys?sort=${asc ? 'asc': 'desc'}&limit=${20}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            // console.log(data)
        })
    },[asc])

    // useEffect(()=>{
    // },[])


    const handleSearch = () =>{
      fetch(`https://assignment-eleven-server-three.vercel.app/toySearch/${search}`)
      .then(res => res.json())
        .then(data => {
          setItems(data)
            // console.log(data)
        })
    }



    return (
        <div className="max-w-screen-2xl mx-auto ">
            <h1 className="text-3xl font-bold text-orange-500 mb-5 text-center">All Toys: {items.length}</h1>
            <button className="btn btn-primary ms-4" onClick={()=>setAsc(!asc)}>{asc ? 'Price High to Low': 'Price Low to High'}</button>
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
  <table className="table  w-full">
    {/* head */}
    <thead className="">
      <tr className="">
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
                items.map(item => <ToysCard key={item._id} item={item}></ToysCard>)
            }
      
    </tbody>
    
  </table>
</div>

        </div>
    );
};

export default AllToys;