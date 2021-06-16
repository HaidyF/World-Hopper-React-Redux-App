import React from 'react';
import {useParams} from "react-router-dom";
import { useState } from 'react'
import { connect } from 'react-redux'
import {useDispatch, useSelector} from "react-redux";
import { fetchCountries } from '../Actions/CountriesActions';

function Country() {
    const { name } = useParams();

    const dispatch = useDispatch();
    
    const countries = useSelector(state => state.countries);
    const loading = useSelector(state => state.loading);

    if(countries.length==0){
        dispatch(fetchCountries())
    }
    const selectedCountry = countries.filter(c => c.name === name)

    const isLoading = () => {
        if(loading || selectedCountry.length == 0){
            return <div></div>
        }else{
            return<div>
                <li>{selectedCountry[0].name}</li> 
                <img src={selectedCountry[0].flag}/>
                <li>Capital: {selectedCountry[0].capital} </li>
                <li>Region: {selectedCountry[0].region}</li>
                <li>Population: {selectedCountry[0].population}</li>
                <li>Timezones: {selectedCountry[0].timezones}</li>
                <li>Main Language: {selectedCountry[0].languages[0].name}</li>
            </div>
        }
    }

    console.log(countries)
        return (
            <div>
                {isLoading()}
            </div>
        );
}
// function mapStateToProps(state){
//     return {countries   : state.countries, loading: state.loading}
//   }
// export default connect(mapStateToProps)(Country);
export default Country;