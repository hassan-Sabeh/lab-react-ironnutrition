import React from 'react';
import 'bulma/css/bulma.css';
import './FoodBox.css';


class FoodBox extends React.Component {
    
    AddHandler = (foodName, foodCalories) => {
        this.props.addtoCart(foodName, foodCalories);
    }
    
    render() {
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.img} />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.foodName}</strong> <br />
                                <small>{this.props.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={this.addtoCart(this.props.foodName, this.props.calories)}>+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

        )
    }
}


export default FoodBox;