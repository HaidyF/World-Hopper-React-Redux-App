import React, { Component } from 'react';
import CountriesContainer from './CountriesContainer';

class CountryDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        flag: '',
        capital: '',
        region: '',
        population: '',
        timezones: '',
        language: ''
    }
}
    render(props) {
        props = this.props.countryProps 
        const countryList =this.props.countries
        return (
            <div className='country-container'>
            Inside CountryDetail
            {this.props.children}  
            {this.countryProps}
            {countryList}
            </div>
        );
    }
}

export default CountryDetail;
