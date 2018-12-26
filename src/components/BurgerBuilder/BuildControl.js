import React from 'react';
import "./controller.scss"

const buildControl = ( props ) => {
    return (
        <div className="build-controller">
            <h5>{props.ingredient}</h5>
            <div className="controller__flex-row">
                <p><strong>Quantity:</strong> {props.quantity}</p>
                <div className="controller__buttons-wrapper">
                    <button onClick={props.plus.bind(this, props.index)} className="btn btn-warning control-button"><span className="fas fa-plus"></span></button>
                    <button onClick={props.minus.bind(this, props.index)} className="btn btn-warning control-button"><span className="fas fa-minus"></span></button>
                </div>
            </div>
        </div>
    )

};

export default buildControl;