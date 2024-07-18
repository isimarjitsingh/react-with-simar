import {Cart} from "./Cart.js"
import {useState,useEffect} from "react";
import ShimmerUI from "./shimmer.js";

export const Body=()=>{


    const [products,setProducts]=useState([]);// for store data
    const [changemaker,setchangemaker]=useState([]);

    const [setsearchText,setsetsearchText]=useState("");// for search bar
    


    useEffect(()=>{
        fetchData();
    },[]);    


    const fetchData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&collection=80414&tags=layout_BAU_Contextual%2Ccutlet&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
        );
        const json=await data.json();
       
        setProducts(json?.data?.cards?.slice(3));
        setchangemaker(json?.data?.cards?.slice(3));
    }


  
    return products.length===0? (<ShimmerUI />):(
        <div className="bodyMain">
            <div className="filter-box">

                <div className="search">
                    <input  type="text"  className="search-bar" value={setsearchText} onChange={
                        (e)=>{
                            setsetsearchText(e.target.value);
                        }
                    }
                    ></input>

                    <button onClick={()=>{
                        const change=products.filter((res)=>{
                           return res.card.card.info.name.toLowerCase().includes(setsearchText.toLowerCase());
                        })
                        setchangemaker(change);
                    }} 
                    >submit</button>
                </div>
                

                <button className="filter"
                onClick={()=>{
                        const filters=products.filter((avg)=>{ return avg.card.card.info.avgRating > 4.0});
                        setchangemaker(filters);
                        console.log("button pressed;")
                    }} 
                    >4+ Rating</button>
            </div>
            
            <div className="restaurant-container">
            {
                changemaker.map((restaurant,index)=>(
                    <Cart resdata={restaurant} key={index}></Cart> )
                    )
            }
            </div>
        </div>
    )
}