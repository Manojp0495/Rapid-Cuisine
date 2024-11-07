import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
 
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);

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
