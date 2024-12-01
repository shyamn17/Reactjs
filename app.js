import React from "react";
import ReactDOM from "react-dom/client";
 
// const heading=React.createElement("h1",{id:"title"},"hello")
// const heading1=React.createElement("h1",{id:"h1"},"hi")
// const heading2=React.createElement("h2",{id:"h2"},"bye")
// const div=React.createElement("div",{id:"div"},[heading1,heading2])
// console.log(heading);

// JSX => React.createElement => Object => HTML(DOM) 
const heading=( 
<h1>hello</h1>
    );

// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);

//function based components
const Title=()=>( 
  <h1>hii</h1>
      );

const Div1=()=>{
   return(
    <div>
    {heading}
    {Title()} 
    {<Title/>} 
    {/* both renders same */}
     <h5>fun based component</h5>
     </div>
   );
} 

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<Div1/>);