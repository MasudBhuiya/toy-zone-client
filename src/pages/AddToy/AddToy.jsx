// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {

    const {user} = useContext(AuthContext)

    const handleLogin = e =>{
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

        const object = {
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
        console.log(object)
    }



    return (
        <div className="w-[60%] mx-auto">
            <form onSubmit={handleLogin}>
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
          <input type="number" placeholder="Rating" name='rating' className="input input-bordered" />
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
    );
};

export default AddToy;