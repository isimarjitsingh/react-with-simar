import React from "react";
import ReactDOM from "react-dom/client";

//REACT ELEMENTS 

// const heading=React.createElement("h1",{ id:"header"},"hello world by react!");

const chechking=<h1>yes this is what is </h1>
const jsxheading=<h1 id="heading" className="head">{chechking}this is a simar</h1>


const access=ReactDOM.createRoot(document.getElementById("container"));
// access.render(jsxheading);


//REACT COMPONENTS

const Headercomponent=()=><h1 id="insideComponent">this is a simar component</h1>;

const InsideComponent=()=>{    
return(

    <div>
        <h1>this component inside component in react</h1>
        {jsxheading}
        {Headercomponent()}
        <Headercomponent></Headercomponent>
    </div>
)
      
};

access.render(<InsideComponent/>)