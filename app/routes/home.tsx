/* page to take the home route for a remix component. i need to add the basic parts of a remix route and then create the html */
import React from 'react';  
import { Link } from 'react-router-dom';
import stylesUrl from '../styles/index.css';
//make the home component  a function   

export default function Index() {
    //return some html  
    return (   
        <div className="container">
            <h1>Home</h1>
            <p>Welcome to the home page</p>
            <p>Go to <Link to="/about">about</Link></p>
        </div>
    );

            
}
