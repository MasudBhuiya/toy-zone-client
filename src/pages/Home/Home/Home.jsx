// import React from 'react';

import Aritcles from "../../Extra/Aritcles";
import Section2 from "../../Extra/Section2";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <div className="w-[90%] text-center mx-auto mt-20 mb-20">
                <div>
                    <h1 className="font-bold text-3xl mb-7">Car Category</h1>
                </div>
            <Category></Category>
            </div>
            <Aritcles></Aritcles>
            <Section2></Section2>
        </div>
    );
};

export default Home;