import { useEffect, useState } from "react";
import RestaurantContainer from "./RestaurantContainer";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

const [listOfResturant,setListOfRestaurant]=useState([]);
const [filteredList,setFilteredList]=useState([]);
const [searchText,setSearchText]=useState("");
const onlineStatus=useOnlineStatus();

useEffect(()=>{
    fetchData();
},[])

const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data?.json();
    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

}
if(onlineStatus===false)
    return(
<h4>Sorry! you are offline...Please check your internet connection!!!</h4>
    );
// if(listOfResturant.length===0){
//     return <Shimmer />;
// }

    return listOfResturant.length===0? <Shimmer /> :(
        <div className="body">
            <div className="search">
                <input type="text" value={searchText} className="search-input" placeholder="Search..." 
                onChange={(e)=>{setSearchText(e.target.value)}}  />
                <button onClick={()=>{
                    const filteredList=listOfResturant.filter((res)=>{
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                    })
                   
                    setFilteredList(filteredList);
                }}>Search</button>
                <button className="search-button"
                onClick={()=>{
                    const filteredList=listOfResturant.filter((item)=>{
                        return item.info.avgRating<=4.5;
                    })
                
                    setFilteredList(filteredList)
                }}
                >filter</button>
            </div>
            <RestaurantContainer myData={filteredList}/>
        </div>
    );
};

export default Body