import React from 'react';

const Theory = () => {
    return (
        <div className='container mt-5 p-3'>
            <h3>How react Works?</h3>
            <p>Answer: ReactJS is simply a JavaScript library for building user interfaces. 
                It was created by Facebook and now has a large community, including FB, that actively maintains it. While building client-side apps, a team of Facebook developers realized that the DOM is slow 
                (DOM) is an application programming interface (API) for HTML and XML documents. 
                It defines the logical structure of documents and the way a document is accessed and manipulated.). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM.</p>
            <h3>How useState Works?</h3>
            <p>Answer: The useState() is a Hook that allows you to have state variables in functional components. 
                React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. 
                Class components a Component and can have state and lifecycle methods: class Message extends React. The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. 
                The useState hook allows us declare one or more state variables in function components. Under the hood, React keeps track of these state variables and ensures they stay up-to-date on subsequent re-renders of the component </p>
        </div>
    );
};

export default Theory;