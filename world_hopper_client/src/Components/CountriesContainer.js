import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../Actions/CountriesActions'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
class CountriesContainer extends Component {
    componentDidMount() {
        this.props.fetchCountries()
    }
    render() {
       
        const countries = this.props.countries
        const loading = this.props.loading
        const isLoading = () => {
            console.log(loading)
            if(loading === true){
                return <h3>Loading...</h3>
            }else{
                return countries.map(country =>{
                  return <div key={country.name}>
                            <h2>{country.name}</h2>
                            <Link to={"/country/"+country.name}>
                            <img src={country.flag}></img>
                            </Link>
                        </div>
             })
            }
        }
        return (
            <div>
            <NavBar />
             In Countries Controller
             {isLoading()}
             {this.props.children}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return { fetchCountries: () => dispatch(fetchCountries()) }
  }
  
function mapStateToProps(state){
    return {countries: state.countries, loading: state.loading}
  }

export default connect(mapStateToProps, mapDispatchToProps)(CountriesContainer);
