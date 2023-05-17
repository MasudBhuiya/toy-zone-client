// import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner grid md:grid-cols-2 md:h-[600px] w-[90%] mx-auto'>
            <div>
            <img className='h-[75%] p-4' src="https://junotoys-html.themerex.net/images/boys.png" alt="" />
            </div>
            <div className='md:mt-28 p-4'>
                <h1 className='font-bold text-5xl text-white mb-2'>PICK THE BEST TOY <br /> FOR YOUR KID</h1>
                <p className='text-lg'>Make play time a blast with our finest toys and games!</p>
                <button className='btn btn-primary'>Buy Now!</button>
            </div>
        </div>
    );
};

export default Banner;