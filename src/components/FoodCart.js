import { render } from '@testing-library/react';
import React from 'react';



class FoodCart extends React.Component{
    state = {
        chosenfood: [{name: 'sdnlsd', calories: 545}, {name: 'sjdsjjf', calories: 555}],
        totalCalories: 0
    }     

    addToCartHandler = (foodToAdd) => {
        let totalCaloriesCopy = this.state.totalCalories + foodToAdd.calories;
        this.setState({
            chosenfood: [...this.state.chosenfood, foodToAdd],
            totalCalories: totalCaloriesCopy
        })
    }

    render() {
        this.addToCartHandler(this.props.addToCart);
        return (
            <>
            <h1>Today's Food</h1>
            {this.state.chosenfood.map(foodEl => {
                return (
                    <h2 key={foodEl.name} >{foodEl.name}</h2>
                    
                )
            })}    
                <h2>Total Calories: {this.state.totalCalories}</h2>
            </>
        )
    }
}

export default FoodCart; 