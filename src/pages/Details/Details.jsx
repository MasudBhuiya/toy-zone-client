// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();

    // const {picture,name, seller, email, price, rating, quantity, description} = details;
    return (
        <div>
            <h1>hello : {details.length}</h1>
        </div>
    );
};

export default Details;