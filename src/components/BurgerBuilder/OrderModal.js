import React from 'react';
import "./Summary.scss";

const orderModal = (props) => {
    const orderDetails = props.orderDetails.ingredients
        .filter(n => n.quantity > 0)
        .map((n, i) => (
       <li key={n.name + i}>{n.name + " (" + n.quantity + ")"}</li>
    ));
    return (
        <div className="order-modal-wrapper">
            <div className="overlay"/>
            <div className="modal-window">
                <div className="modal-header">
                    <h4 className="modal-title">Review Your Order</h4>
                    <button onClick={props.hideModal} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <h5>Your great burger contains:</h5>
                    {orderDetails}
                    <hr/>
                    <p><span className="fas fa-shopping-cart fa-lg" />
                        <strong>{"Total price: " + props.orderDetails.sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</strong></p>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={props.hideModal} className="btn btn-secondary">Continue shopping</button>
                    <button type="button" className="btn btn-success">Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default orderModal;