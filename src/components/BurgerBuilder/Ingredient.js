import React from 'react';
import "./IngredientsClasses.scss"

const ingredient = ( props ) => {
    return (
      <div className={ "ingredient " + props.ingredient } />
    );
};

export default ingredient;