// import React from 'react';

import { Link } from "react-router-dom";

const Aritcles = () => {
    return (
        <div className="w-[90%] mx-auto text-center">
            <h1 className="font-bold text-3xl text-center">Read Our Latest Articles</h1>
            <p className="text-center">More Articles? <Link to='/blog'><span className="btn btn-link">Visits our Blog</span></Link></p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3">
            <div className="p-10">
                <img className="h-56 mx-auto " src="https://junotoys-html.themerex.net/images/product_8.jpg" alt="" />
                <h1 className="text-xl font-semibold">I want a sports car and truck</h1>
                <p>In March, Vogue published an article titled “Do Seoul’s Toddlers Have the World’s Most Stylish Hair?” that featured nine street style photographs of the three-feet.</p>
                <p className="text-red-500 mt-5">admin</p>
                <p>October 11, 2022</p>
            </div>
            <div className="p-10">
                <img className="h-56 mx-auto" src="https://junotoys-html.themerex.net/images/product_18.jpg" alt="" />
                <h1 className="text-xl font-semibold">Toys for Kids: How Soon Is Too Soon?</h1>
                <p>When I was a kid, I used to go home after school and have some good ol’ fashioned alone time. I’d call mom, let her know I was safe, and then do kid things.</p>
                <p className="text-red-500 mt-5">admin</p>
                <p>February 11, 2023</p>
            </div>

            <div className="p-10">
                <img className="h-56 mx-auto" src="https://junotoys-html.themerex.net/images/product_3.jpg" alt="" />
                <h1 className="text-xl font-semibold">Childs likes to play with cars</h1>
                <p>If you think your New Year’s resolutions are lofty, we invite you to meet these young fashion designers. Quietly but confidently, several teens and tweens over</p>
                <p className="text-red-500 mt-5">admin</p>
                <p>April 11, 2023</p>
            </div>
            </div>
        </div>
    );
};

export default Aritcles;