import React from 'react';
import 'bulma/css/bulma.css';

class Search extends React.Component{
    state = {
        foodQuery: ""
    }    


    handleSubmit = (event) => {
        event.preventDefault();
        
    }

    handleNameChange(event) {
        let newFoodList = []
        this.props.foodLocal.map(foodEl => {
            if (foodEl.name.includes(event.target.value)) {
                newFoodList.push(foodEl);
            }
        });
        this.props.searchHandler(newFoodList);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Search Food: </label>
                <input type='text' name="name" onChange={(e) => this.handleNameChange(e)}/>
            </form>
        )
    }
}

export default Search

