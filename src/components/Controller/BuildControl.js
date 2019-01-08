import React from 'react';
import "./controller.scss"

const buildControl = ( props ) => {
    return (
        <div className="build-controller">
            <div className="controller__flex-row">
                <h5>{props.ingredient}</h5>
            </div>
            <div className="controller__flex-row">
                <div className="controller__text-wrapper">
                    <p>{"(" + props.quantity + ")"}</p>
                </div>
                <div className="controller__buttons-wrapper">
                    <button onClick={props.plus.bind(this, props.index)} className="btn btn-warning control-button"><span className="fas fa-plus"></span></button>
                    <button onClick={props.minus.bind(this, props.index)} className="btn btn-warning control-button"><span className="fas fa-minus"></span></button>
                    <span className="badge badge-pill badge-success">{props.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>
                </div>
            </div>
        </div>
    )

};

export default buildControl;