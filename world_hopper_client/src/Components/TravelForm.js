import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';
import { addInput } from '../Actions/CountriesActions'
import { fetchEntries } from '../Actions/CountriesActions'
import { connect } from 'react-redux'
import ContainerImage from './ContainerImage';

class TravelForm extends Component {
    state = {
                name: '',
                age: '',
                country: ''
    }

    componentDidMount() {
        this.props.fetchEntries()
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
        [name]: value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const input = { name: this.state.name,
                        age: this.state.age,
                        country: this.state.country
                    }
        this.props.addInput(input)
        this.setState({
            name: "",
            age: "",
            country: ""
        })
    }

    render() {
        let formEntries = []
        if (this.props.formEntries != null){
            formEntries = this.props.formEntries
        }
        
        const loading = false
        const isLoading = () => {
            if(loading === true || formEntries === null){
                return <h3>Loading...</h3>
            }else{
                return formEntries && formEntries.map(formEntry =>{
                  return <div style={{color: 'yellow', paddingRight:'50px'}}>
                            <li>{formEntry.name}-{formEntry.age}-{formEntry.country}</li>
                        </div>
             })
            }
        }

        return (
        <div>
        <NavBar />
        <h1> Tell Us Where You Would Like To Travel Next!</h1>
        <ContainerImage />
                <form onSubmit={this.handleSubmit} style={{color:'orange'}}>
                    <label>Name: </label>
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                        <br></br>
                    <label>Age: </label>
                    <input type='text' value={this.state.age} onChange={this.handleChange} name="age"/>
                    <br></br>
                    <label>What country would you want to visit? </label>
                    <input type='text' value={this.state.country} onChange={this.handleChange} name="country"/>
                    <br></br>
                    <input type='submit' value="Submit"/>
                </form>
                {isLoading()}
        <Footer />
        </div>
        )
    }
}

function mapStateToProps(state){
    return { formEntries: state.formEntries, loading: state.loading }
}

export default connect(mapStateToProps, { addInput, fetchEntries })(TravelForm);
