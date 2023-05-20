// import React from 'react';

import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../Hooks/useTitle";

const Update = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    useTitle('Update')
    const {price, _id, quantity, details} = data;
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const update = {
            price,
            quantity,
            details
        }
        fetch(`https://assignment-eleven-server-three.vercel.app/toys/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'success!',
                    text: 'Data Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate('/mytoys')
            }

        })
    }
    return (
        <div className="w-[60%] mx-auto mb-10 mt-10">
          <h1 className="font-bold text-3xl text-center text-orange-500">Update Now!</h1>
            <form onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available Quantity</span>
          </label>
          <input type="number" defaultValue={quantity} placeholder="quantity" name='quantity' className="input input-bordered" />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <textarea defaultValue={details} name="details" className="border" cols="30" rows="10"></textarea>
        </div>

        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Update' name="" id="" />
        </div>
        </form>
        </div>
    );
};

export default Update;