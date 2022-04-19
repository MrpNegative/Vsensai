import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Register from '../Register/Register';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Login></Login>
            <Register></Register>
        </div>
    );
};

export default Home;