import {useState} from "react";

const Header=()=>{

    const [UserInterface,SetUserInterface]= useState("Login");

    const key=1;
    return(
        <div className="headerMain"> 
            <div className="headerLogo">
                <img  className="logo" alt="logo" src="https://tse2.mm.bing.net/th?id=OIP.yLpyUoQ9Qz3hYB47Pdi1pgHaHa&pid=Api&P=0&h=180"></img>
            </div>
            <div className="headerList">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="button" onClick={
                        ()=>{
                            return UserInterface==="Login"?SetUserInterface("Logout"):SetUserInterface("Login");

                        }
                    }>{UserInterface}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
