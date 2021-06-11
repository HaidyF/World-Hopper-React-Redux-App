import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../Actions/CountriesActions'

class CountriesContainer extends Component {
    componentDidMount() {
        this.props.fetchCountries()

    }
    render() {
        const countries = this.props.countries
        console.log(this.props.countries)
        return (
            <div>
             In Countries Controller
             {/* { CountriesReducer.fetchCountries } */}
             {/* {countries[0].name} */}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return { fetchCountries: () => dispatch(fetchCountries()) }
  }
  
  function mapStateToProps(state){
    return {countries: state.countries}
  }

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
