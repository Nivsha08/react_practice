import React from 'react';
import Ingredient from "../Ingredients/Ingredient"
import "../Ingredients/IngredientsClasses.scss"

const burgerPreview = ( props ) => {
    const ingredientList = [
            {name: "top-bun", quantity: 1},
            ...props.ingredients,
            {name: "bottom-bun", quantity: 1}
        ];
    let preview = [];
    ingredientList.forEach(p => {
       if (p.quantity > 0)
           for (let j = 0; j < p.quantity; j++)
               preview.push(p);
    });
    preview = preview.map((p, index) => (
        <Ingredient ingredient={p.name.toLowerCase()} key={index} />
    ));
    if (preview.length === 2) {
        preview = <div className="alert alert-success">Please add some ingredients to your burger!</div>
    }
    return (
      <div className="burger-preview-wrapper">
          {preview}
      </div>
    );
};

export default burgerPreview;