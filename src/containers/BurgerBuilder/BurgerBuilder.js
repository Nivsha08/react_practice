import React, { Component } from 'react';
import Controller from "../../components/BurgerBuilder/Controller"
import BurgerPreview from "../../components/BurgerBuilder/BurgerPreview"
import Summary from "../../components/BurgerBuilder/Summary"
import OrderModal from "../../components/BurgerBuilder/OrderModal"

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            {name: "Cucumber", quantity: 0, price: 1.00},
            {name: "Tomato", quantity: 0, price: 1.00},
            {name: "Onion", quantity: 0, price: 1.00},
            {name: "Lettuce", quantity: 0, price: 1.50},
            {name: "Cheese", quantity: 0, price: 2.00},
            {name: "Meat", quantity: 0, price: 5.50},
        ],
        sum: 0,
        isModal: false
    };

    handleIncreaseIngredient = i => {
        this.setState((prevState) => {
            const newIngredients = [...prevState.ingredients];
            const newSum = prevState.sum + newIngredients[i].price;
            newIngredients[i].quantity++;
            return {
                newIngredients,
                sum: newSum
            };
      });
    };

    handleDecreaseIngredient = i => {
        this.setState((prevState) => {
            const newIngredients = [...prevState.ingredients];
            let newSum = prevState.sum;
            if (newIngredients[i].quantity > 0) {
                newSum -= newIngredients[i].price;
                newIngredients[i].quantity--;
            }
            return {
                newIngredients,
                sum: newSum
            };
        });
    };

    showOrderSummaryModal = () => this.setState({isModal: true});
    hideOrderSummaryModal = () => this.setState({isModal: false});

    render() {
        const modal = this.state.isModal ? <OrderModal hideModal={this.hideOrderSummaryModal} orderDetails={this.state} /> : null;
        return (
          <div className="page-wrapper">
              {modal}
              <BurgerPreview ingredients={this.state.ingredients}/>
              <Controller ingredients={this.state.ingredients}
                          minus={this.handleDecreaseIngredient}
                          plus={this.handleIncreaseIngredient} />
              <Summary sum={this.state.sum} purchasable={this.state.sum > 0}
                       showModal={this.showOrderSummaryModal} hideModal={this.hideOrderSummaryModal} />
          </div>
        );
    }

}

export default BurgerBuilder;