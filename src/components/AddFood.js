import React from 'react';
import 'bulma/css/bulma.css';

class AddFood extends React.Component{
    state = {
        name: "",
        calories: "",
        image: ""
    }    


    handleSubmit = (event) => {
        event.preventDefault();
        
        this.props.addFood(this.state);
        this.setState({
            name: "",
            calories: "",
            image: ""
        })
        this.props.addForm();
    }

    handleNameChange = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }


    handleCaloriesChange = (event) => {
        this.setState(
            {
                calories: event.target.value
            }
        )
    }


    handleImageChange = (event) => {
        this.setState(
            {
                image: event.target.value
            }
        )
    }

    handleChange = (event) => {
        //event.target // <input name="calories" value>

        // const name = event.target.name
        // const value = event.target.value
        const {name, value} = event.target

        // const o = {}
        // o[name] = value // {calories: 500}

        this.setState({
            [name]: value
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Food Name: </label>
                <input type='text' name="name" value={this.state.name} onChange={this.handleChange}/>
                
                <label> Number of calories: </label>
                <input type='text' name="calories" value={this.state.calories} onChange={(e) => this.handleChange(e)}/>
                
                <label>food image</label>
                <input type='text'  name="image" value={this.state.image} onChange={(e) => this.handleChange(e)}/>
                <button className="button is-danger">Add</button>
            </form>
        )
    }
}

export default AddFood 

