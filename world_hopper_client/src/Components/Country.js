import React from 'react';
import {useParams} from "react-router-dom";
// import {CountriesContainer} from './CountriesContainer'
// import { useState } from 'react'
// import { fetchCountries } from '../Actions/CountriesActions'
import { connect } from 'react-redux'

function Country({ countries }) {

    const { name } = useParams();

    // const countryList = this.props.countries
    // const [counts,setCountry] = useState()
        return (
            <div>
                {name}
                {/* {countryList.map(country => <ul><li>{country.name} - {country.flag} - {country.capital} - {country.region} - {country.population} - {country.timezones} - {country.language}</li></ul>)} */}
            </div>
        );
}
function mapStateToProps(state){
    return {countries   : state.countries, loading: state.loading}
  }

export default connect(mapStateToProps)(Country);
