// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToy = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    const handleSet = e =>{
        e.preventDefault();
        const form = e.target;
        const picture = form.picture.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = user.email;
        const sub_cagegory = form.subcagegory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;

        const order = {
            picture,
            name,
            seller,
            email,
            sub_cagegory,
            price,
            rating,
            quantity,
            details
        }
        // console.log(object);
        fetch('http://localhost:5000/toys',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Wow!',
                    text: 'Added Successfully'
                  })
                  form.reset();
                  navigate('/alltoys')
              }
        })
    }



    return (
        <div>
            <h1 className="font-bold text-4xl text-center mt-10 mb-5">Add a Toy</h1>
            <div className="w-[60%] mx-auto">
            <form onSubmit={handleSet}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toys Picture</span>
          </label>
          <input type="text" placeholder="picture" name='picture' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Toy Name</span>
          </label>
          <input type="text" placeholder="Toy Name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Name</span>
          </label>
          <input type="text" placeholder="Seller Name" name='seller' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Seller Email</span>
          </label>
          <input type="email" defaultValue={user?.email} placeholder="Email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
        <label className="label">
            <span className="label-text">Sub Category</span>
          </label>
  <div className="input-group ">
    <select name="subcagegory" className="select select-bordered w-full">
      <option>car</option>
      <option>truck</option>
      <option>police</option>
    </select>
  </div>
</div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" name='price' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Abailable Quantity</span>
          </label>
          <input type="number" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Detail Description</span>
          </label>
          <textarea name="details" className="border" cols="30" rows="10"></textarea>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-warning bg-orange-500 text-white" type="submit" value='Add a toy' name="" id="" />
        </div>
        </form>
        </div>
        </div>
    );
};

export default AddToy;