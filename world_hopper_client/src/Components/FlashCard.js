import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { fetchCountries } from '../Actions/CountriesActions';
import { FlashcardComponent } from 'react-flashcard'
import Navbar from './NavBar/NavBar';
import Header from './Header';
import Footer from './Footer';


function FlashCard() {

  let cardData = []

  const dispatch = useDispatch();
  
  const countries = useSelector(state => state.countries);
  const loading = useSelector(state => state.loading);

  if(countries.length>0){
    cardData=[]
    for (const country of countries) {
      cardData.push({
        front: {
                image: country.flag,
              },
              back: {
                text: country.name,
              }
      })
    }
  } else {
    dispatch(fetchCountries())
  }

  const isLoading = () => {
      if(loading || cardData.length === 0){
          return <div></div>
      }else{
          return<div>
                   <FlashcardComponent className="flash-card" dataSource={cardData} />
          </div>
      }
  }

      return (
          <div>
          <Navbar />
          <Header />
             <h1 style={{color:'orange'}}> Let's Play!</h1>
              {isLoading()}
              <Footer />
          </div>
      );
}
export default FlashCard;