import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Footer from './Footer';
import { addInput } from '../Actions/CountriesActions'
// import { fetchEntries } from '../Actions/CountriesActions'
import { connect } from 'react-redux'
import ContainerImage from './ContainerImage';

class TravelForm extends Component {
    state = {
                name: '',
                age: '',
                country: ''
    }

    componentDidMount() {
        this.props.addInput()
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
        [name]: value
        })
        console.log("travel")
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
            console.log(formEntries)
            formEntries = this.props.formEntries[0]
        }
        
        const loading = false
        const isLoading = () => {
            if(loading === true){
                return <h3>Loading...</h3>
            }else{
                return formEntries && formEntries.map(formEntry =>{
                  return <div key={formEntry.name} style={{paddingRight:'50px'}}>
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
                <form onSubmit={this.handleSubmit}>
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

// function mapDispatchToProps(dispatch){
//     return { fetchEntries: () => dispatch(fetchEntries()) }
// }

function mapStateToProps(state){
    return { formEntries: state.formEntries, loading: state.loading }
}

export default connect(mapStateToProps, { addInput })(TravelForm);
