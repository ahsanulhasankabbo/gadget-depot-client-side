import React from 'react';

const Blogs = () => {
    return (
        <div className='m-12'>
            <div className='mb-10'>
                <h1 className='text-2xl font-semibold'># How will you improve the performance of a React Application?</h1>
                <p className='text-xl font-semibold my-2'>Answer:  </p>
                <ul>
                    <li>1.Keeping component state local where necessary.</li>
                    <li>2.Memoizing React components to prevent unnecessary re-renders.</li>
                    <li>3.Code-splitting in React using dynamic import</li>
                    <li>4.Windowing or list virtualization in React applications.</li>
                    <li>5.Lazy loading images in React.</li>
                </ul>
            </div>

            <div>
                <h1 className='text-2xl font-semibold'># What are the different ways to manage a state in a React application?</h1>
                <p className='text-xl font-semibold my-2'>Answer:  </p>
                <h1>There are four main types of state you need to properly manage in your React apps:</h1>
                <ul>
                    <li>1.Local state : Local state in React allows you to instantiate a plain JavaScript object for a component and hold information that might affect its rendering.</li>
                    <li>2.Global state : Role of the global state. In React, originally, the state is held and modified within the same React component . In most applications, different components may need to access and update the same state</li>
                    <li>3.Server state : The state is a property of each component that holds its data, it gives personality and structure, it's an important factor that establishes the correct functionality and affects the interactivity in such a way that the user is greatly affected by it.</li>
                    <li>4.URL state : react-url-state is a library to set the state of a react component in the query string of the URL and parse it if set.</li>
                </ul>
            </div>

            <div className='mb-10'>
                <h1 className='text-2xl font-semibold'># How does prototypical inheritance work?</h1>
                <p className='text-xl font-semibold my-2'>Answer:  </p>
                <p>Every object with its methods and properties contains an internal and hidden property known as Prototype. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using proto.</p>
            </div>

            <div className='mb-10'>
                <h1 className='text-2xl font-semibold'># You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                <p className='text-xl font-semibold my-2'>Answer:  </p>
                <p>First of all i will apply map on array of products. This i will get each product from array of products. Then i will send each product to another route. Then i will distructure all key from product object. Then i will use useQuery for sending data to server. In useQuery i will use query link so that i will find all data by query(name). Then i will use get api to server for finding data from database using query(name).</p>
            </div>


            <div className='mb-10'>
                <h1 className='text-2xl font-semibold'># What is a unit test? Why should write unit tests?</h1>
                <p className='text-xl font-semibold my-2'>Answer:  </p>
                <p>Unit test is a method that instantiates a small part of our code and verifies its behavior independently from other parts of the project.
                    Unit testing allows software developers to actually think through the design of the software and what has to be done before they write the code. This can help them to stay focused and can also help them to create much better designs. Testing a code early on can help to define what that piece of code is really responsible for.</p>
            </div>
        </div>
    );
};

export default Blogs;