import React from "react";
export const Card=()=>{
    return(
        <div id="container">
            <h2>welcome</h2>
            <p>
                this is <span id="highlight">paragraph</span> with text;
            </p>
            <button>click me</button>
        </div>
    )
};
// without jsx
export const CardWithoutJSX=()=>{
    return React.createElement(
        "div",
        {id:"card"},
        React.createElement("h2",null,"welcome"),
        React.createElement(
            "p",
            null,
            "this is a",
            React.createElement("span",{id:"highlight"},"paragraph"),
            "with text"
        ),
        React.createElement("button",null,"Click me")
    );
};