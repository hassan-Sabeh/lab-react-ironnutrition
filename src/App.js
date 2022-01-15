import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox.js';
import foods from './foods.json';
import AddFood from './components/AddFood.js';
import 'bulma/css/bulma.css';

const foodList = foods.slice(0, 10);

class App extends React.Component{
    state = {
      food : foodList,
      addFood: false
    }
    addFormHandler = () => {
      console.log(this.state.addFood)
      this.setState({
        addFood: !this.state.addFood
      }, console.log(this.state.addFood))
    }

    addFoodHandler = (foodToAdd) => {
      console.log(foodToAdd)   
      let foodCopy = [...this.state.food]
      foodCopy.push(foodToAdd)
      this.setState({
           food: foodCopy
         }) 
    }
    render() {
      return (
      <div className="App">
        { this.state.addFood ? 
          <AddFood addFood={this.addFoodHandler} addForm={this.addFormHandler}/>  
          :
          <button className="button is-warning" onClick={this.addFormHandler}>Add new food</button>
        }
        {this.state.food.map(foodEl => {
          return (
            <FoodBox key={foodEl.name} 
            img={foodEl.image} 
            foodName={foodEl.name}
            calories={foodEl.calories}
            />
          )
        })}
      </div>
      )

    }
}



export default App;
