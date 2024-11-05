const RestaurantCard = (props) => {

  const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=props?.resData.info;
   
    return (
        <div className="rescard">
             
            <img 
                className="logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
                alt="Restaurant Dish" 
            />
            <div className="card-info">
               <h4>{name}</h4>
               <h4>{cuisines}</h4>
               <h4>{avgRating} Rating</h4>
               <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard