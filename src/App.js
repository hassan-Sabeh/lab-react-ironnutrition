import React from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox.js';
import foods from './foods.json';
import AddFood from './components/AddFood.js';
import Search from './components/Search.js';
import FoodCart from './components/FoodCart.js';
import 'bulma/css/bulma.css';

const foodList = foods.slice(0, 10);

class App extends React.Component{
    state = {
      food : foodList,
      addFood: false,
      foodDisplay: foodList,
      addedCart: {food: '', calories: 0}
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
           food: foodCopy,
           foodDisplay: foodCopy
         }) 
    }
    searchHandler = (newFoodList) => {
      this.setState({
        foodDisplay: newFoodList
      });
    }

    AddHandler = (foodName, foodCalories) => {
      this.setState({
        addedCart: {food: foodName, calories: foodCalories}
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
        <Search foodLocal={this.state.food} searchHandler={this.searchHandler} />
        <FoodCart addToCart={this.state.addedCart}/>
        {this.state.foodDisplay.map(foodEl => {
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
