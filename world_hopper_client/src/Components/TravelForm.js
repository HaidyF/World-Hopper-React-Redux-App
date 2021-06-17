import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header';
import Footer from './Footer';
import { addInput } from '../Actions/CountriesActions'
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
        let inputs = []
        if (this.props.input != null){
            inputs = this.props.inputs
            console.log(inputs)
        }
        
        const loading = this.props.loading
        const isLoading = () => {
            if(loading === true){
                return <h3>Loading...</h3>
            }else{
                return inputs.map(input =>{
                  return <div key={input.name} style={{paddingRight:'50px'}}>
                            <h2>{input.name}</h2>
                        </div>
             })
            }
        }

        return (
        <div>
        <NavBar />
        {/* <h1>In TravelForm</h1> */}
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
                    <input type='text' value={this.state.travel} onChange={this.handleChange} name="country"/>
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
    return {inputs: state.inputs, loading: state.loading}
  }

export default connect(mapStateToProps, { addInput })(TravelForm);
