import React from "react";
import ReactDOM from "react-dom";

const heading=React.createElement("h1",{ id:"header"},"hello world by simar!");

const access=ReactDOM.createRoot(document.getElementById("container"));

access.render(heading);