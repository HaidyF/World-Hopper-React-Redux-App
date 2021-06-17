import React, { Component } from 'react';
import NavBar from '../Components/NavBar/NavBar'
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
    render() {
        return (
           
            <div>
                <NavBar />
                    <Header />
                    <img  alt="homeImage" src= "https://ksspreschool.com/wp-content/uploads/2020/06/multilingual-kids-diversity-cultural-tolerance-kss-preschool.png"></img>
                <Footer />
            </div>
        );
    }
}

export default Home;
