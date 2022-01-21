import React, { useEffect, useState } from 'react';
import axios from 'axios';
import mealApi from './../api/api'
import Restuarant from '../restuarant/Restuarant';

const Fetch = () => {
    const[meal,setMeal]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
        .then(res=>res.json())
        .then(data=>setMeal(data))

    },[])
    console.log(meal)
    meal.meals.map((food)=>{
        return console.log(food)
    })
    return( 
    <div>

    </div>
    )
};

export default Fetch;