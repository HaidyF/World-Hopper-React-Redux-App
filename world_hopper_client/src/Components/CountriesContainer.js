import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../Actions/CountriesActions'
import { Link } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'
import Footer from './Footer';
class CountriesContainer extends Component {
    componentDidMount() {
        this.props.fetchCountries()
    }
    render() {
       
        const countries = this.props.countries
        const loading = this.props.loading
        const isLoading = () => {
            if(loading === true){
                return <h3>Loading...</h3>
            }else{
                return countries.map(country =>{
                  return <div key={country.name} style={{paddingRight:'50px'}}>
                            <h2>{country.name}</h2>
                            <Link to={"/country/"+country.name}>
                            <img src={country.flag} alt={country.name} style={{width:'200px'}}></img>
                            </Link>
                        </div>
             })
            }
        }
        return (
            <div>
            <NavBar />
            <h1>Pick A Country To Learn More About</h1>
            <div className="countries-div" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
             {isLoading()}
             </div>
             <Footer />
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
