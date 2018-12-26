import React from 'react';
import Ingredient from "./Ingredient"
import "./IngredientsClasses.scss"

const burgerPreview = ( props ) => {
    const ingredientList = [
            {name: "top-bun", quantity: 1},
            ...props.ingredients,
            {name: "bottom-bun", quantity: 1}
        ];
    const preview = [];
    ingredientList.forEach(p => {
       if (p.quantity > 0)
           for (let j = 0; j < p.quantity; j++)
               preview.push(p);
    });
    const renderPreview = preview.map((p, index) => (
        <Ingredient ingredient={p.name.toLowerCase()} key={index} />
    ));
    console.log(preview);
    console.log(renderPreview);
    return (
      <div className="burger-preview-wrapper">
          {renderPreview}
      </div>
    );
};

export default burgerPreview;