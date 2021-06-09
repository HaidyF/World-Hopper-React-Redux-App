import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from '../Actions/CountriesActions'

class CountriesContainer extends Component {
    componentDidMount() {
        this.props.fetchCountries()
    }
    render() {
        return (
            <div>
                Countries Container
            </div>
        );
    }
}

export default connect(null, { fetchCountries })(CountriesContainer);
