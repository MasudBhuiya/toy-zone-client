// import React from 'react';

const Blog = () => {
    return (
        <div className="w-[90%] mx-auto p-5 space-y-4">
            <div>
            <p>(1) Q. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
            <h1>Ans: Access tokens are used to make secure the users application. when a client login the website, then Refrest token send a access token. Access tokens are used for making authenticated API requests. Access tokens have a limited lifespan and expire after a certain time. A refresh token plays a crucial role in obtaining a new access token when the current one expires. We store then in a localstorge or in a HTTP only cookies.</h1>
            </div>
            <div>
                <p>(2) Q. Compare SQL and NoSQL databases?</p>
                <h1>Ans: SQL is a programming language. SQL databases are used to interface with relational databases.
                It records data in rows and tables, with logical links between them. NoSQL database is a class of DBMS which are non-relational and generally do not use SQL.
                </h1>
            </div>
            <div>
                <p>(3) Q. What is express JS? What is Nest JS?</p>
                <h1>Ans: Express.js is a free and open-source web application framework for Node.js. Express JS is used for designing and building web applications quickly and easily. It follows the MVC architectural pattern, handles routing, middleware, and request/response handling efficiently. And Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. Nest.js leverages TypeScript and provides a structured approach inspired by Angular, using decorators, dependency injection, and a module-based architecture. 
</h1>
            </div>
            <div>
                <p>(4) Q. What is MongoDB aggregate and how does it work?</p>
                <h1>Ans: MongoDB aggregate is a way fo processing a garge number fo documents in a collection which passign then through different stages. The stages make up what is known as a pipeline. It returns the total, average, maximum, and minimum values.</h1>
            </div>
        </div>
    );
};

export default Blog;