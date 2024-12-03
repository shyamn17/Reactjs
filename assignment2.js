import React from "react";
import ReactDOM from "react-dom/client";
// const heading1=React.createElement("h1",{},"heading1");
// const heading2=React.createElement("h2",{},"heading2");
// const heading3=React.createElement("h3",{},"heading3");
// const div=React.createElement("div",{},[heading1,heading2,heading3]);
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(div);

const heading1=()=>(
<h1>heading</h1>
);
const heading2=()=>(
    <h2>heading</h2>
    );
    const heading3=()=>(
        <h3>heading</h3>
        );
        const Title=()=>{
            return(
                <span>
                    <h5>hello</h5>
                </span>
            )
        }
        const Div1=()=>{
            return(
                <div>
                {heading1()}
                {heading2()}
                {heading3()}
                {<Title/>}
                </div>
            );
        }
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(<Div1/>);