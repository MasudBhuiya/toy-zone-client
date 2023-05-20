// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysCard from "./MyToysCard";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const MyToys = () => {
    const [myToys, setMyToys] = useState([]);
    const {user} = useContext(AuthContext)
    useTitle('My Toys')

    const url = (`https://assignment-eleven-server-three.vercel.app/mytoys?email=${user?.email}`);
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMyToys(data)
            console.log(data)
        })
    },[url]);


    const handleDelete = id =>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data. deletedCount> 0){
                const remaining = myToys.filter(booking => booking._id !== id);
                setMyToys(remaining)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
        })
            }
          })

    }








    return (
        <div>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>Delete</th>
        <th>Image</th>
        <th>Toy Name</th>
        <th>Seller</th>
        <th>Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Details</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
    {
                myToys.map(toys => <MyToysCard key={toys._id} toys={toys} handleDelete={handleDelete}></MyToysCard>)
            }
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;