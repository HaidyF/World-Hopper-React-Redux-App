import React, { Component } from 'react';

class CountryDetail extends Component {
    render() {
        return (
            <div>
                const countryDetails = this.props.countries
                
                  return 
            return (
                <div key={country.name}>
                            <h2>{country.name}</h2>
                            <Link to={"/country/"+country.name}>
                            <img src={country.flag}></img>
                            </Link>
                        </div>
            </div>
        );
    }
}

export default CountryDetail;
