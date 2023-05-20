// import React from 'react';

import Aritcles from "../../Extra/Aritcles";
import Section2 from "../../Extra/Section2";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallery from "../Gallery/Gallery";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../../Hooks/useTitle";


const Home = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Easing function for animations
          once: true, // Whether the animation should occur only once
        });
      }, []);
      useTitle('Home')
    return (
        <div>
            <div  data-aos="zoom-in">
            <Banner></Banner>
            </div>
            <div data-aos="zoom-in">
            <Gallery></Gallery>
            </div>
            <div data-aos="fade-in" className="w-[90%] text-center mx-auto mt-20 mb-20">
                <div  data-aos="zoom-in">
                    <h1 className="font-bold text-3xl mb-7 text-orange-500">Car Category</h1>
                </div>
            <Category></Category>
            </div>
            <div data-aos="zoom-in">
            <Aritcles></Aritcles>
            </div>
            <div data-aos="zoom-in">
            <Section2></Section2>
            </div>
        </div>
    );
};

export default Home;