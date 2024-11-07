import React, { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const [resInfo,setResInfo]=useState(null);
  const {resId}=useParams();


  useEffect(()=>{
  fetchMenu();
  },[])

const fetchMenu=async()=>{
const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId="+resId);
const json=await data.json();
setResInfo(json?.data);
}

 if(resInfo===null) return <Shimmer />

const {name,avgRating,totalRatingsString,city}=resInfo?.cards[2]?.card?.card?.info;
// const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log(itemCards)
  return(
    <div>
  <h2>{name}</h2>
  <h4>{avgRating}{totalRatingsString}</h4>
  <ul>
    <li>  <h4><b>Outlet</b> {city}</h4></li>
    <li> <h4><b>Closed & not delivering</b></h4></li> 
  </ul>
  <ul>
    <h2>Menu</h2>

{/* {itemCards.map((item)=>(
<li>{item.card.info.name}</li>
))} */}

  </ul>

    </div>
  )
}

export default RestaurantMenu
