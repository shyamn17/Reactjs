import React from "react";
import ReactDOM from "react-dom/client";
 
const heading=React.createElement("h1",{id:"title"},"hello")
const heading1=React.createElement("h1",{id:"h1"},"hi")
const heading2=React.createElement("h2",{id:"h2"},"bye")
const div=React.createElement("div",{id:"div"},[heading1,heading2])
console.log(heading);

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(div);