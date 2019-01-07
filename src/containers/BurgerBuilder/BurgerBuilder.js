import React, { Component } from 'react';
import Controller from "../../components/BurgerBuilder/Controller"
import BurgerPreview from "../../components/BurgerBuilder/BurgerPreview"
import Summary from "../../components/BurgerBuilder/Summary"
import OrderModal from "../../components/BurgerBuilder/OrderModal"
import axios from "../../axios-orders"

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
        isModal: false,
        loading: false
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

    proceedToCheckout = () => {
        this.setState({ loading: true });
        axios.get("https://randomuser.me/api/")
            .then (d => d.data.results[0])
            .then(d => {
                const order = {
                    ingredients: this.state.ingredients
                        .filter(i => i.quantity > 0)
                        .map(i => `${i.name} (${i.quantity})`),
                    price: `${this.state.sum}`,
                    customer: {
                        name: `${d.name.title}. ${d.name.first} ${d.name.last}`,
                        email: d.email,
                        address: `${d.location.street}, ${d.location.city}`
                    }
                };
                axios.post("/orders.json", order)
                    .then(res => {
                        this.setState({ loading: false });
                        this.hideOrderSummaryModal();
                    })
                    .catch(err => {
                        this.setState({ loading: false });
                        this.hideOrderSummaryModal();
                    });
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
          <div className="page-wrapper">
              <OrderModal show={this.state.isModal}
                          loading={this.state.loading}
                          hideModal={this.hideOrderSummaryModal}
                          proceed={this.proceedToCheckout}
                          orderDetails={this.state} />
              <BurgerPreview ingredients={this.state.ingredients}/>
              <Controller ingredients={this.state.ingredients}
                          minus={this.handleDecreaseIngredient}
                          plus={this.handleIncreaseIngredient} />
              <Summary sum={this.state.sum} purchasable={this.state.sum > 0}
                       showModal={this.showOrderSummaryModal}
                       hideModal={this.hideOrderSummaryModal} />
          </div>
        );
    }

}

export default BurgerBuilder;