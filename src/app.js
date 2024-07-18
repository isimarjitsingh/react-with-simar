import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Body} from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
  



const Container=()=>{
    return(
        <React.Fragment>
        <Header />
        <Body />
        </React.Fragment>
    )
    
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<Container />,
        errorElement:<Error/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact",
        element:<Contact/>,
    },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
