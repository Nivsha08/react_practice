import React, { Component } from 'react';
import Controller from "./Controller"

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            {name: "Meat", quantity: 0},
            {name: "Onion", quantity: 0},
            {name: "Lettuce", quantity: 0},
            {name: "Cucumber", quantity: 0},
            {name: "Tomato", quantity: 0},
        ]
    };

    handleIncreaseIngredient = i => {
        const newIngredientList = [...this.state.ingredients];
        newIngredientList[i].quantity++;
        this.setState(newIngredientList);
    };

    handleDecreaseIngredient = i => {
        const newIngredientList = [...this.state.ingredients];
        if (newIngredientList[i].quantity > 0) newIngredientList[i].quantity--;
        this.setState(newIngredientList);
    };

    render() {
        return (
          <div className="page-wrapper">
              <Controller ingredients={this.state.ingredients}
                          minus={this.handleDecreaseIngredient}
                          plus={this.handleIncreaseIngredient} />
          </div>
        );
    }

}

export default BurgerBuilder;