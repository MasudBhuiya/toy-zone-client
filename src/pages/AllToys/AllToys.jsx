// import React from 'react';

import { useEffect, useState } from "react";
import ToysCard from "./ToysCard";

const AllToys = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(data)
        })
    },[])
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 space-y-6 mt-20 mb-20">
            {
                items.slice(0, 20).map(item => <ToysCard key={item._id} item={item}></ToysCard>)
            }
        </div>
    );
};

export default AllToys;