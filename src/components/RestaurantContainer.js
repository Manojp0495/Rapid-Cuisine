import RestaurantCard from "./RestaurantCard";

const RestaurantContainer = (props) => {

    const{myData}=props;
    return (
        <div>
            <div className="res-container">
               {
                myData.map((resturant)=>{
                    return <RestaurantCard key={resturant.info.id} resData={resturant}/>
                })
               } 
            </div>
            <button className="add-button">Add More Images</button>
        </div>
    );
};

export default RestaurantContainer