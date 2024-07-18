import {Body} from "./Body"

export const Cart=(props)=>{
    const{resdata}=props;
    return(
        <div className="cartmain">
            <div className="cartImg">
                <img className="cart-image" alt="res-" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resdata.card.card.info.cloudinaryImageId}></img>
            </div>
            <div className="cartlist">
                 <h5>{resdata.card.card.info.name}</h5>
                 <h5>{resdata.card.card.info.cuisines.join(",")}</h5>
                 <h5>{resdata.card.card.info.avgRating}</h5>
                 <h5>{resdata.card.card.info.sla.slaString}</h5>
            </div>
        </div>
    )
}


