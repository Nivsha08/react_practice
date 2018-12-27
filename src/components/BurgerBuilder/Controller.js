import React from 'react';
import "./controller.scss";
import BuildControl from "./BuildControl";

const controller = ( props ) => {

    const ingredientList = props.ingredients.map((p, i) => (
            <BuildControl ingredient={p.name} quantity={p.quantity} price={p.price}
                          index={i}
                          key={i}
                          plus={props.plus}
                          minus={props.minus} />
    ));

    return (
      <div className="controller">
          <h4>Choose your ingredients</h4>
          {ingredientList}
      </div>
    );
};

export default controller;