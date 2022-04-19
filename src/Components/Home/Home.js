import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Footer from '../Register/Footer/Footer';
import Register from '../Register/Register';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Login></Login>
            <Register></Register>
            <Footer></Footer>
        </div>
    );
};

export default Home;