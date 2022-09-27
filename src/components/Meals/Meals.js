import React, { useEffect, useState } from 'react';
// import { handleDetails } from '../../utilities/Function';
import MealCard from '../MealCard/MealCard';
import SearchMeal from '../SearchedMeal/SearchMeal';
import './Meals.css'
const Meals = () => {
   const [meals , setMeals] = useState([])
   const [mealsdetails , setMealdetails] = useState([])
   useEffect(()=>{
     fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
     .then(res => res.json())
     .then(data => setMeals(data.meals))
   } , [])
  
   

const handleDetails = (param) => {
    const mealDetailsArray = [param]
   setMealdetails(mealDetailsArray)
}
console.log(mealsdetails);

// search meals
const[search,setSearch]=useState("");
const[meal,setMeal]=useState([]);
const searchedMeal=(evt)=>{
   
    if(evt.key==="Enter")
    {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=> {setMeal(data.meals);
       setSearch("")})
    }
}

// console.log(meal);




/* ----------- */


    return (
        <div>
             <input type="search" className="search-bar" onChange={(e)=>setSearch(e.target.value)} value={search} onKeyPress={searchedMeal}/>
        <div className='meals-container'>
             
            <div className='meal-card-container'>
           
            {
                meals.map(meal => <MealCard key={meal.idMeal}
                 handleDetails={handleDetails}
                 meal={meal} >
                 </MealCard>)
            }
            {
               meal.map(res => <SearchMeal key={res.idMeal}  handleDetails={handleDetails} searchedMeals={res}></SearchMeal>)
            }
            </div>

              <div className='mealDetails-section'>
                  <h1>This is meals details section</h1>
                 {
                    mealsdetails.map(meal => <div>
                        <h1>{meal.strMeal}</h1>
                        <p>Decription: {meal.strInstructions}</p>

                    </div> )
                 }
                 {

                 }
              </div>
        </div>
        </div>
    );
};

export default Meals;