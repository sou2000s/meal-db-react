import React from 'react';
import './MealCard.css'
const MealCard = (props) => {
    console.log(props);
    const {handleDetails , meal} = props
      const {strMeal: name , strMealThumb: img} = meal;
    return (
        <div className='card'>
            <img src={img} style = {{width:'100%'}} alt="" />
            <p>Name:{name} </p>
            <button onClick={()=>handleDetails(meal)}>Details</button>
        </div>
    );
};

export default MealCard;