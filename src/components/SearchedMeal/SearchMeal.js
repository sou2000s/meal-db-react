import React from 'react';
import './SearchedMeal.css'
const SearchMeal = ({searchedMeals , handleDetails}) => {
    //    console.log(props);
       const {strMeal: name , strMealThumb:img} = searchedMeals
    return (
        <div className='card'>
           <img src={img} style={{width:"100%"}} alt="" /> 
           <p>Name: {name}</p>
           <button onClick={()=>handleDetails(searchedMeals)}>Details</button>
        </div>
    );
};

export default SearchMeal;