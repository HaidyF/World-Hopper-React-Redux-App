import React from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { fetchCountries } from '../Actions/CountriesActions';
import NavBar from '../Components/NavBar/NavBar'
import Header from './Header';
import Footer from './Footer';

function Country() {
    const { name } = useParams();

    const dispatch = useDispatch();
    
    const countries = useSelector(state => state.countries);
    const loading = useSelector(state => state.loading);

    if(countries.length===0){
        dispatch(fetchCountries())
    }
    const selectedCountry = countries.filter(c => c.name === name)

    const isLoading = () => {
        if(loading || selectedCountry.length === 0){
            return <div></div>
        }else{
            return<div>
                <NavBar />
                <Header />

                <div style={countryStyle2}>{selectedCountry[0].name}</div> 
                <br></br>
                <img alt={selectedCountry[0].name} src={selectedCountry[0].flag}/>
                <div style={countryStyle}>Capital: {selectedCountry[0].capital} </div>
                <div style={countryStyle}>Region: {selectedCountry[0].region}</div>
                <div style={countryStyle}>Population: {selectedCountry[0].population}</div>
                <div style={countryStyle}>Timezones: {selectedCountry[0].timezones}</div>
                <div style={countryStyle}>Main Language: {selectedCountry[0].languages[0].name}</div>
            <Footer />
            </div>
        }
    }

        return (
            <div>
                {isLoading()}
            </div>
        );
}
const countryStyle = {
    backgroundColor: '#282c34',
    fontize: 'calc(80px + 2vmin)',
    color: 'grey'
}
const countryStyle2 = {
    backgroundColor: '#282c34',
    fontize: 'calc(80px + 2vmin)',
    color: 'white'
}
export default Country;