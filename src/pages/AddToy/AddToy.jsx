// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const AddToy = () => {
    const navigate = useNavigate()
    const {user} = useContext(AuthContext);
    useTitle('Add Toy')

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
        fetch('https://assignment-eleven-server-three.vercel.app/toys',{
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
        <div className="md:p-10 p-3 bg-slate-900 max-w-screen-2xl mx-auto">
            <h1 className="font-bold text-4xl text-center mt-10 mb-5 text-orange-500">Add a Toy</h1>
            <div className=" mx-auto">
            <form onSubmit={handleSet} >
        <div className="grid md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Toys Picture</span> */}
          </label>
          <input type="text" placeholder="picture" name='picture' className="input input-bordered bg-slate-700 border border-stone-200" required/>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Toy Name</span> */}
          </label>
          <input type="text" placeholder="Toy Name" name='name' className="input input-bordered bg-slate-700 border border-stone-200"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Seller Name</span> */}
          </label>
          <input type="text" placeholder="Seller Name" name='seller' className="input input-bordered bg-slate-700 border border-stone-200" required />
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Seller Email</span> */}
          </label>
          <input type="email" defaultValue={user?.email} placeholder="Email" name='email' className="input input-bordered border border-stone-200 bg-slate-700" required />
        </div>
        <div className="form-control">
        <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Sub Category</span> */}
          </label>
  <div className="input-group ">
    <select name="subcagegory"  className="select select-bordered w-full bg-slate-700 border border-stone-200 text-gray-400"  required>
      <option disabled selected>Car Type</option>
      <option>car</option>
      <option>truck</option>
      <option>police</option>
    </select>
  </div>
</div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Price</span> */}
          </label>
          <input type="number" placeholder="Price" name='price' className="input input-bordered bg-slate-700 border border-stone-200"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Rating</span> */}
          </label>
          <input type="text" placeholder="Rating" name='rating' className="input input-bordered bg-slate-700 border border-stone-200"  required/>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Abailable Quantity</span> */}
          </label>
          <input type="number" placeholder="Available Quantity" name='quantity' className="input input-bordered bg-slate-700 border border-stone-200"  required/>
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            {/* <span className="label-text text-white font-bold text-lg">Detail Description</span> */}
          </label>
          <textarea name="details" className="border p-2 rounded bg-slate-700" cols="30" rows="10" placeholder="Details"  required></textarea>
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