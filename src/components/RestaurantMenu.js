import React, { useEffect,useState } from 'react'


const RestaurantMenu = () => {
  const [resInfo,setResInfo]=useState(null);

  useEffect(()=>{
  fetchMenu();
  },[])

const fetchMenu=async()=>{
const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=150602&catalog_qa=undefined&submitAction=ENTER");
const json=await data.json();
setResInfo(json?.data?.cards[2]?.card?.card.info);
console.log(json.data.cards[2].card.card.info.name)
console.log(json.data.cards[2].card.card.info.costForTwo)
console.log(json.data.cards[2].card.card.info.cuisines)
}

// if(resInfo===null) return <Shimmer /> 
  return(
    <div>
  <h2>{resInfo?.name}</h2>
  <h4>{resInfo?.avgRating}{resInfo?.totalRatingsString}</h4>
  <ul>
    <li>  <h4><b>Outlet</b> {resInfo?.city}</h4></li>
    <li> <h4><b>Closed & not delivering</b></h4></li>

 
  </ul>

    </div>
  )
}

export default RestaurantMenu
