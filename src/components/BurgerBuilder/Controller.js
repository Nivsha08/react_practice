import React from 'react';
import "./controller.scss";
import BuildControl from "./BuildControl";

const controller = ( props ) => {

    const ingredientList = props.ingredients.map((p, i) => (
            <BuildControl ingredient={p.name} quantity={p.quantity}
                          index={i}
                          key={i}
                          plus={props.plus}
                          minus={props.minus} />
    ));

    return (
      <div className="controller">
          <h4>BUILD YOUR BURGER</h4>
          {ingredientList}
          <hr/>
          <button className="btn btn-md btn-success">Checkout</button>
      </div>
    );
};

export default controller;