import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";

const RestaurantContainer = (props) => {

    const{myData}=props;
    return (
        <div>
            <div className="res-container">
               {
                myData.map((resturant)=>{
                    return <Link key={resturant.info.id} to={"/restaurant/"+resturant.info.id}><RestaurantCard resData={resturant}/></Link>
                })
               } 
            </div>
            <button className="add-button">Add More Images</button>
        </div>
    );
};

export default RestaurantContainer