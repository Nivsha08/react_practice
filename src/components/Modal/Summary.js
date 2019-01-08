import React from 'react';
import "./Summary.scss"

const summary = (props) => {
    return (
        <div className="summary-wrapper">
            <div className="alert alert-warning">
                <h3>{"Total: " + props.sum.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h3>
            </div>
                <button className={"btn btn-md btn-success" + (props.sum <= 0 ? " disabled" : " pulse")}
                        onClick={props.showModal}>Checkout</button>
        </div>
    );
};

export default summary;